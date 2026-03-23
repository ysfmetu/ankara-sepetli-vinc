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
 * Gets ALL MDX files (published and unpublished)
 */
export function getAllPosts(): BlogPost[] {
    ensureDirectory();

    const files = fs.readdirSync(CONTENT_PATH);

    const posts: BlogPost[] = files
        .filter((fileName) => fileName.endsWith('.mdx'))
        .filter((fileName) => fileName !== 'cephe-temizligi-sepetli-vinc.mdx')
        .map((fileName) => {
            const fullPath = path.join(CONTENT_PATH, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            const { data, content } = matter(fileContents);

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

            return {
                title: data.title,
                slug: slugParsed,
                excerpt: data.description || data.excerpt, // Handle both common variants
                date: data.date,
                image: imagePath,
                readTime: data.readTime || '5 dk',
                content: processedContent,
            } as BlogPost;
        });

    // Sort by date (descending)
    return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
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
