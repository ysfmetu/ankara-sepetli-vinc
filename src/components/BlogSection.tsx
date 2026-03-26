import Link from 'next/link';
import Image from 'next/image';
import { getPublishedPosts } from '@/lib/mdx';
import { BookOpen } from 'lucide-react';

export default function BlogSection() {
    const allPosts = getPublishedPosts();
    const latestPosts = allPosts.slice(0, 3);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                            Bilgi Merkezi &amp; Blog
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Sektörel ipuçları, kiralama rehberleri ve iş güvenliği standartları hakkında faydalı bilgiler.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors group"
                    >
                        <span>Tüm Yazıları Gör &rarr;</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post.slug}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100"
                        >
                            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={`Ankara sepetli vinç kiralama hizmeti - ${post.title}`}
                                    className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500 ease-out"
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
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">
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
        </section>
    );
}
