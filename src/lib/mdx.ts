import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// MDX file folder target
const CONTENT_PATH = path.join(process.cwd(), 'content/blog');

export interface BlogPostFrontmatter {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    image: string;
    readTime: string;
}

export interface BlogPost extends BlogPostFrontmatter {
    content: string;
}

/**
 * Ensures the content/blog directory exists to prevent crash on fresh clones.
 */
function ensureDirectory() {
    if (!fs.existsSync(CONTENT_PATH)) {
        fs.mkdirSync(CONTENT_PATH, { recursive: true });
    }
}

/**
 * Simple markdown-to-HTML converter.
 * Handles: images, headings (h2, h3, h4), bold, links, unordered/ordered lists,
 * horizontal rules, JSX blocks (div, a tags with className), and paragraphs.
 */
function markdownToHtml(md: string): string {
    const lines = md.split('\n');
    const htmlLines: string[] = [];
    let inList = false;
    let listType: 'ul' | 'ol' = 'ul';

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Skip empty lines but close lists
        if (line.trim() === '') {
            if (inList) {
                htmlLines.push(listType === 'ul' ? '</ul>' : '</ol>');
                inList = false;
            }
            continue;
        }

        // Pass through JSX / HTML blocks (div, a tags with className, etc.)
        if (line.trim().startsWith('<')) {
            if (inList) {
                htmlLines.push(listType === 'ul' ? '</ul>' : '</ol>');
                inList = false;
            }
            htmlLines.push(line);
            continue;
        }

        // Horizontal rule
        if (/^---+$/.test(line.trim())) {
            if (inList) {
                htmlLines.push(listType === 'ul' ? '</ul>' : '</ol>');
                inList = false;
            }
            htmlLines.push('<hr class="my-8 border-gray-200" />');
            continue;
        }

        // Markdown table detection
        if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
            if (inList) {
                htmlLines.push(listType === 'ul' ? '</ul>' : '</ol>');
                inList = false;
            }
            // Collect all table rows
            const tableRows: string[] = [line];
            while (i + 1 < lines.length && lines[i + 1].trim().startsWith('|') && lines[i + 1].trim().endsWith('|')) {
                i++;
                tableRows.push(lines[i]);
            }
            // Parse table
            const parseCells = (row: string) => row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
            const isSeparator = (row: string) => /^\|[\s\-:|]+\|$/.test(row.trim());

            let tableHtml = '<div class="overflow-x-auto my-8"><table class="min-w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">';
            let headerDone = false;

            for (let r = 0; r < tableRows.length; r++) {
                if (isSeparator(tableRows[r])) continue; // Skip separator row
                const cells = parseCells(tableRows[r]);
                if (!headerDone) {
                    tableHtml += '<thead class="bg-gray-100"><tr>';
                    cells.forEach(cell => {
                        tableHtml += `<th class="border border-gray-200 px-4 py-3 text-left text-sm font-bold text-gray-900">${inlineMarkdown(cell)}</th>`;
                    });
                    tableHtml += '</tr></thead><tbody>';
                    headerDone = true;
                } else {
                    tableHtml += '<tr class="even:bg-gray-50">';
                    cells.forEach(cell => {
                        tableHtml += `<td class="border border-gray-200 px-4 py-3 text-sm text-gray-700">${inlineMarkdown(cell)}</td>`;
                    });
                    tableHtml += '</tr>';
                }
            }
            tableHtml += '</tbody></table></div>';
            htmlLines.push(tableHtml);
            continue;
        }

        // Headings
        const h4Match = line.match(/^####\s+(.+)/);
        const h3Match = line.match(/^###\s+(.+)/);
        const h2Match = line.match(/^##\s+(.+)/);
        if (h4Match) {
            if (inList) { htmlLines.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
            htmlLines.push(`<h4 class="text-lg font-bold mt-6 mb-3 text-gray-900">${inlineMarkdown(h4Match[1])}</h4>`);
            continue;
        }
        if (h3Match) {
            if (inList) { htmlLines.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
            htmlLines.push(`<h3 class="text-xl font-bold mt-8 mb-4 text-gray-900">${inlineMarkdown(h3Match[1])}</h3>`);
            continue;
        }
        if (h2Match) {
            if (inList) { htmlLines.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
            htmlLines.push(`<h2 class="text-2xl font-bold mt-10 mb-5 text-gray-900">${inlineMarkdown(h2Match[1])}</h2>`);
            continue;
        }

        // Images: ![alt](url)
        const imgMatch = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (imgMatch) {
            if (inList) { htmlLines.push(listType === 'ul' ? '</ul>' : '</ol>'); inList = false; }
            const alt = imgMatch[1] || 'Ankara sepetli vinç kiralama görseli';
            const src = imgMatch[2];
            htmlLines.push(`<figure class="my-8"><img src="${src}" alt="${alt}" loading="lazy" class="w-full rounded-xl shadow-sm" style="max-width:100%;height:auto" /><figcaption class="text-sm text-gray-500 text-center mt-2">${alt}</figcaption></figure>`);
            continue;
        }

        // Unordered list items
        const ulMatch = line.match(/^[-*]\s+(.+)/);
        if (ulMatch) {
            if (!inList || listType !== 'ul') {
                if (inList) htmlLines.push(listType === 'ul' ? '</ul>' : '</ol>');
                htmlLines.push('<ul class="list-disc pl-6 space-y-2 my-4">');
                inList = true;
                listType = 'ul';
            }
            htmlLines.push(`<li class="text-gray-700">${inlineMarkdown(ulMatch[1])}</li>`);
            continue;
        }

        // Ordered list items
        const olMatch = line.match(/^\d+\.\s+(.+)/);
        if (olMatch) {
            if (!inList || listType !== 'ol') {
                if (inList) htmlLines.push(listType === 'ul' ? '</ul>' : '</ol>');
                htmlLines.push('<ol class="list-decimal pl-6 space-y-2 my-4">');
                inList = true;
                listType = 'ol';
            }
            htmlLines.push(`<li class="text-gray-700">${inlineMarkdown(olMatch[1])}</li>`);
            continue;
        }

        // Regular paragraph
        if (inList) {
            htmlLines.push(listType === 'ul' ? '</ul>' : '</ol>');
            inList = false;
        }
        htmlLines.push(`<p class="mb-4 text-gray-700 leading-relaxed">${inlineMarkdown(line)}</p>`);
    }

    if (inList) {
        htmlLines.push(listType === 'ul' ? '</ul>' : '</ol>');
    }

    return htmlLines.join('\n');
}

/**
 * Process inline markdown: bold, links, inline images
 */
function inlineMarkdown(text: string): string {
    // Bold: **text**
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // Inline images: ![alt](url)
    text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy" class="inline-block rounded-lg max-w-full" style="height:auto" />');
    // Links: [text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:text-primary-hover font-medium underline underline-offset-2">$1</a>');
    return text;
}

/**
 * Gets ALL MDX files (published and unpublished)
 */
export function getAllPosts(): BlogPost[] {
    ensureDirectory();

    const files = fs.readdirSync(CONTENT_PATH);

    const posts = files
        .filter((fileName) => fileName.endsWith('.mdx'))
        .filter((fileName) => fileName !== 'cephe-temizligi-sepetli-vinc.mdx')
        .map((fileName) => {
            const fullPath = path.join(CONTENT_PATH, fileName);
            
            try {
                const stats = fs.statSync(fullPath);
                if (stats.isDirectory() || stats.size === 0) return null;
            } catch (e) {
                return null;
            }

            const fileContents = fs.readFileSync(fullPath, 'utf8');

            if (!fileContents || fileContents.trim() === '') {
                return null;
            }

            const { data, content } = matter(fileContents);

            if (!data || !data.title || !data.date) {
                return null; // Skip invalid frontmatter posts
            }

            let slugParsed = data.slug || fileName.replace(/\.mdx$/, '');
            let imagePath = data.image || `/images/blog/${slugParsed}-cover.webp`;

            // Auto fallback mechanism for WebP / PNG -> SVG upgradeability
            if (imagePath && !fs.existsSync(path.join(process.cwd(), 'public', imagePath))) {
                imagePath = imagePath.replace(/\.(webp|png|jpg|jpeg)$/, '.svg');
            }

            // Deep check for in-content images as well to fallback to SVG
            let processedContent = content;
            const contentImageRegex = /\/images\/blog\/([^)]+\.(webp|png|jpg|jpeg))/g;
            let match;
            while ((match = contentImageRegex.exec(content)) !== null) {
                const innerImagePath = match[0];
                if (!fs.existsSync(path.join(process.cwd(), 'public', innerImagePath))) {
                    processedContent = processedContent.replace(innerImagePath, innerImagePath.replace(/\.(webp|png|jpg|jpeg)$/, '.svg'));
                }
            }

            // Convert markdown content to HTML
            const htmlContent = markdownToHtml(processedContent);

            return {
                title: data.title,
                slug: slugParsed,
                excerpt: data.description || data.excerpt || '', // Handle both common variants
                date: data.date,
                image: imagePath,
                readTime: data.readTime || '5 dk',
                content: htmlContent,
            } as BlogPost;
        })
        .filter((post): post is BlogPost => post !== null); // Removing nulls

    // Log all detected blog slugs during build for debugging
    console.log(`[MDX] Detected ${posts.length} valid blog posts:`, posts.map(p => p.slug).join(', '));

    // Sort by date (descending)
    return posts.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        // Handle invalid dates gracefully, placing them at the end
        if (isNaN(dateA)) return 1;
        if (isNaN(dateB)) return -1;
        return dateB - dateA;
    });
}

/**
 * Gets only published MDX files (date <= today), sorted by date.
 */
export function getPublishedPosts(): BlogPost[] {
    const allPosts = getAllPosts();
    const now = new Date();
    // Normalize generic dates by ignoring time of day differences (optional, but robust)
    now.setHours(23, 59, 59, 999);

    return allPosts.filter(post => new Date(post.date).getTime() <= now.getTime());
}

/**
 * Get a specific post by its slug (can be published or unpublished).
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
    const posts = getAllPosts();
    return posts.find((post) => post.slug === slug);
}
