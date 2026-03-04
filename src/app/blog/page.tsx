import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen } from 'lucide-react';
import { getAllPosts } from '@/lib/mdx';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'Bilgi Merkezi ve Blog | Ankara Sepetli Vinç',
    description: 'Ankara sepetli vinç kiralama, yüksekte çalışma güvenliği ve platform seçimi hakkında uzman rehberleri ve güncel yazılar.',
    alternates: {
        canonical: 'https://ankarasepetlivinc.com/blog',
    },
};

export default function BlogList() {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Blog', href: '/blog' },
    ];

    const allPosts = getAllPosts();

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: `https://ankarasepetlivinc.com${item.href}`
        }))
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Header />

            <main className="flex-grow pt-8 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumb items={breadcrumbItems} />

                    <div className="max-w-3xl mb-12 mt-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                            Bilgi Merkezi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sektörel ipuçları, araç rehberleri ve kiralama süreçlerine dair bilmeniz gereken her şey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allPosts.map((post) => (
                            <Link
                                href={`/blog/${post.slug}`}
                                key={post.slug}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100"
                            >
                                <div className="relative h-56 md:h-64 w-full overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={`${post.title} | Ankara Sepetli Vinç`}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1.5 shadow-sm">
                                        <BookOpen className="w-3.5 h-3.5" />
                                        <span>{post.readTime} Okuma</span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-sm text-gray-400 mb-3 font-medium">
                                        {post.date}
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 line-clamp-3 md:line-clamp-2 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold mt-auto group-hover:gap-3 transition-all duration-300">
                                        Makaleye Git &rarr;
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
            <FloatingCTA />
        </div>
    );
}
