import { Award, ImageIcon } from 'lucide-react';

const Training = () => {
  const trainings = [
    {
      title: 'Short Class My Skill',
      date: 'April 2025',
      points: [
        'Menguasai dasar pengolahan data pada Microsoft Excel menggunakan fungsi HLOOKUP, VLOOKUP, dan INDEX-MATCH.',
        'Mengolah dan menganalisis data dengan fungsi lookup untuk meningkatkan efisiensi pengelolaan data.'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80'
      ]
    },
    {
      title: 'Webinar Coretax DJP',
      date: 'Maret 2025',
      points: [
        'Mempelajari sistem Coretax DJP dan fitur-fitur utama yang mendukung administrasi perpajakan secara digital.',
        'Memahami alur penggunaan Coretax DJP dalam pengelolaan data dan layanan perpajakan.'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=500&q=80',
        'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?w=500&q=80'
      ]
    }
  ];

  return (
    <section id="training" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 flex items-center gap-4">
            Professional Training.
          </h2>
          <div className="w-16 h-1 bg-brand-accent"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {trainings.map((training, index) => (
            <div key={index} className="bg-brand-background rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-2">{training.title}</h3>
                  <div className="inline-flex items-center gap-2 bg-brand-secondary px-3 py-1 rounded-full text-xs font-semibold text-brand-text-light uppercase tracking-wider">
                    {training.date}
                  </div>
                </div>
                <div className="bg-brand-accent/10 p-3 rounded-xl text-brand-accent hidden sm:block">
                  <Award size={28} />
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {training.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-text-light leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 mt-2.5 flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Gallery */}
              {training.gallery && training.gallery.length > 0 && (
                <div className="pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-2 mb-3 text-brand-text font-medium text-sm">
                    <ImageIcon size={16} className="text-brand-accent" />
                    Sertifikat / Dokumentasi
                  </div>
                  <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
                    {training.gallery.map((imgUrl, i) => (
                      <div key={i} className="relative group overflow-hidden rounded-lg min-w-[140px] h-28 border border-gray-200 snap-center flex-shrink-0 cursor-zoom-in">
                        <img src={imgUrl} alt={`Dokumentasi ${training.title}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Training;
