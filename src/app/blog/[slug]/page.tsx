import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Calendar, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { getAllPosts, getPostBySlug, getPublishedPosts } from '@/lib/mdx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';
import { SEO_CONFIG } from '@/config/seo';
import { getMetadataAlternates, getCanonicalUrl } from '@/lib/seo-utils';
import { getWhatsAppUrl, getPhoneUrl, siteConfig } from '@/config/site';
import ZoomableImage from '@/components/ZoomableImage';
import BlogContentWithLightbox from '@/components/BlogContentWithLightbox';

interface BlogPostProps {
    params: Promise<{ slug: string }>;
}

// SSG for all blog posts
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Yazı Bulunamadı | Ankara Sepetli Vinç',
        };
    }

    const publishedPosts = getPublishedPosts();
    const isPublished = publishedPosts.some(p => p.slug === post.slug);

    if (!isPublished) {
        return {
            title: post.seoTitle || `${post.title} | Ankara Sepetli Vinç Blog`,
            description: post.excerpt,
            robots: {
                index: false,
                follow: false
            }
        }
    }

    const ogImage = post.image
        ? `${SEO_CONFIG.baseUrl}${post.image}`
        : `${SEO_CONFIG.baseUrl}/og-image.png`;

    return {
        title: post.seoTitle || `${post.title} | ${SEO_CONFIG.siteName} Blog`,
        description: post.excerpt,
        alternates: getMetadataAlternates(`/blog/${slug}`),
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: getCanonicalUrl(`/blog/${slug}`),
            type: 'article',
            publishedTime: post.date,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [ogImage],
        }
    };
}

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const publishedPosts = getPublishedPosts();
    const isPublished = publishedPosts.some(p => p.slug === post.slug);

    const breadcrumbItems = [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: post.title, href: `/blog/${post.slug}` },
    ];

    const wpLink = getWhatsAppUrl(`/blog/${post.slug}`);
    const telLink = getPhoneUrl();
    const phoneNumber = siteConfig.contact.phoneDisplay;

    // Article JSON-LD
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        image: [`${SEO_CONFIG.baseUrl}${post.image}`],
        datePublished: post.date,
        dateModified: post.date,
        author: [{
            '@type': 'Organization',
            name: SEO_CONFIG.siteName,
            url: SEO_CONFIG.baseUrl
        }],
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': getCanonicalUrl(`/blog/${post.slug}`)
        },
        publisher: {
            '@type': 'Organization',
            name: SEO_CONFIG.siteName,
            logo: {
                '@type': 'ImageObject',
                url: `${SEO_CONFIG.baseUrl}/logo.png`
            }
        },
        description: post.excerpt
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {isPublished && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            <Header />

            <main className="flex-grow pt-8 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={breadcrumbItems} />

                    <div className="mt-6 flex flex-col lg:flex-row gap-12">

                        {/* Left: Article Content */}
                        <article className="lg:w-2/3 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="relative w-full bg-gray-950 flex items-center justify-center overflow-hidden" style={{minHeight: '280px', maxHeight: '380px'}}>
                                <Image
                                    src={post.image}
                                    alt={`${post.title} | Ankara Sepetli Vinç`}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                    style={{maxHeight: '380px'}}
                                    priority
                                    sizes="(max-width: 768px) 100vw, 66vw"
                                />
                            </div>

                            <div className="p-6 md:p-10">
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4" />
                                        <span>{post.readTime} Okuma</span>
                                    </div>
                                </div>

                                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                    {post.title}
                                </h1>

                                {/* Content Area */}
                                <BlogContentWithLightbox html={post.content} />

                                <hr className="my-10 border-gray-100" />

                                <div className="bg-red-50 rounded-xl p-8 text-center border border-red-100">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Sepetli Vinç mi Arıyorsunuz?</h3>
                                    <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                                        Ankara'nın tüm ilçelerine 7/24 operatörlü, sigortalı ve uygun fiyatlı sepetli platform hizmeti veriyoruz.
                                    </p>
                                    <Link
                                        href="/#teklif-al"
                                        className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                                    >
                                        Hemen Ücretsiz Teklif Alın
                                        <ChevronRight className="w-5 h-5" />
                                    </Link>
                                </div>

                            </div>
                        </article>

                        {/* Right: Sidebar Sticky CTAs */}
                        <aside className="lg:w-1/3 space-y-8">
                            <div className="sticky top-28 space-y-6">

                                {/* Contact CTA */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Hızlı Destek Alın</h3>
                                    <p className="text-gray-500 text-sm mb-6">
                                        Projenize uygun aracı belirlemek veya fiyat almak için anında bize ulaşın.
                                    </p>

                                    <div className="space-y-3">
                                        <a
                                            href={telLink}
                                            className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-hover text-white px-4 py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
                                        >
                                            <Phone className="w-5 h-5" />
                                            {phoneNumber}
                                        </a>
                                        <a
                                            href={wpLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white px-4 py-3.5 rounded-xl font-bold transition-all shadow-sm"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            WhatsApp Destek
                                        </a>
                                    </div>
                                </div>

                                {/* Popular Posts Preview */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hidden lg:block">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">Diğer Yazılar</h3>
                                    <ul className="space-y-4">
                                        {publishedPosts.filter(p => p.slug !== post.slug).slice(0, 3).map(otherPost => (
                                            <li key={otherPost.slug}>
                                                <Link href={`/blog/${otherPost.slug}`} className="group flex gap-3">
                                                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                                        <img src={otherPost.image} alt={otherPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                                            {otherPost.title}
                                                        </h4>
                                                        <span className="text-xs text-gray-400 mt-1 block">{otherPost.date}</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/blog" className="inline-block mt-4 text-sm font-bold text-primary hover:text-primary-hover">
                                        Tümünü Gör &rarr;
                                    </Link>
                                </div>

                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
            <FloatingCTA />
        </div>
    );
}
