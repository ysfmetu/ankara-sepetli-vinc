'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Fiyat neye göre değişir?',
      answer:
        'Fiyatlarımız saatlik, günlük veya haftalık olarak; kiralanacak vincin çalışma yüksekliğine ve işin niteliğine göre değişiklik göstermektedir. Kesin fiyat için ücretsiz teklif alabilir veya bizi arayabilirsiniz.',
    },
    {
      question: 'Operatör ve sigorta var mı?',
      answer:
        'Evet, tüm sepetli vinç ve platform kiralama hizmetlerimizde alanında uzman, sertifikalı operatörlerimiz aracı kullanmak üzere fiyata dahildir. Ayrıca tüm hizmetlerimiz iş güvenliği standartlarına uygun olarak sigortalı şekilde gerçekleştirilir.',
    },
    {
      question: 'Aynı gün hizmet mümkün mü?',
      answer:
        "Filomuzun genişliği ve Ankara'nın farklı noktalarındaki hazır araçlarımız sayesinde, uygunluk durumuna göre acil taleplerinize aynı gün içinde en hızlı şekilde yanıt verip sevk sağlıyoruz.",
    },
    {
      question: 'Kaç metreye kadar hizmet veriyorsunuz?',
      answer:
        'Araç filomuzda 10 metreden başlayıp 70+ metreye kadar çalışabilen farklı uzunluklarda ve tonajlarda sepetli vinç, örümcek platform ve hiyap seçenekleri mevcuttur.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sıkça Sorulan Sorular</h2>
          </div>
          <p className="text-gray-600 text-lg">
            Kiralama süreci, araçlarımız ve fiyatlandırma hakkında merak ettikleriniz.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-primary/50 bg-red-50/30' : 'border-gray-200 bg-white hover:border-gray-300'}`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => handleToggle(index)}
              >
                <span
                  className={`font-bold text-lg pr-8 ${openIndex === index ? 'text-primary' : 'text-gray-900'}`}
                >
                  {faq.question}
                </span>
                <div
                  className={`p-1 rounded-full ${openIndex === index ? 'bg-primary/10 text-primary' : 'text-gray-400'}`}
                >
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              <div
                className={`transition-all duration-300 px-6 overflow-hidden ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="h-px w-full bg-gray-100 mb-4"></div>
                <p className="text-gray-600 leading-relaxed font-medium">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
