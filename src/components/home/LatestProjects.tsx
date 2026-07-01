import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getPublishedPosts } from '@/lib/mdx';

export default function LatestProjects() {
  const posts = getPublishedPosts().slice(0, 6);

  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
              Son Yapılan Çalışmalar
            </h2>
            <p className="text-gray-600 mt-3 text-lg max-w-2xl">
              Ankara genelinde başarıyla tamamladığımız en güncel saha çalışmalarımız ve operasyon detayları.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="group shrink-0 font-bold text-gray-700 hover:text-primary transition-colors flex items-center gap-2 bg-white px-6 py-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200"
          >
            Tümünü Gör <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={post.image || '/images/blog/default-cover.jpg'}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {post.date && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm">
                    {post.date}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary group-hover:text-primary-hover flex items-center gap-1 transition-colors">
                    Detayları İncele
                    <ArrowRight size={16} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
