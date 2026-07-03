import { useState } from 'react';
import { Briefcase, Users, ImageIcon } from 'lucide-react';
import ImageModal from './ImageModal';

const IconMap = { Briefcase, Users };

const Experience = ({ data }) => {
  const [modalImage, setModalImage] = useState(null);

  if (!data) return null;

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 flex items-center gap-4">
            Experience.
          </h2>
          <div className="w-16 h-1 bg-brand-accent"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
          
          {data.map((exp, index) => {
            const Icon = IconMap[exp.iconName] || Briefcase;
            
            return (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-secondary text-brand-primary shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                  <Icon size={18} />
                </div>
                
                {/* Content */}
                <div className="min-w-0 w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-brand-accent/30 transition-all duration-300">
                  <div className="flex flex-col mb-4 gap-2">
                    <span className="inline-block px-3 py-1 bg-brand-secondary text-brand-text text-xs font-semibold uppercase tracking-wider rounded-full w-fit">
                      {exp.type}
                    </span>
                    <h3 className="font-bold text-xl md:text-2xl text-brand-primary">{exp.company}</h3>
                    <div className="text-brand-text font-medium">{exp.role}</div>
                    <time className="text-sm text-brand-text-light flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                      {exp.date}
                    </time>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-brand-text-light text-sm leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-brand-primary/50 mt-2 flex-shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Gallery */}
                  {exp.gallery && exp.gallery.length > 0 && (
                    <div className="pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-2 mb-3 text-brand-text font-medium text-sm">
                        <ImageIcon size={16} className="text-brand-accent" />
                        Galeri
                      </div>
                      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory w-full custom-scrollbar">
                        {exp.gallery.map((imgUrl, i) => (
                          <div 
                            key={i} 
                            onClick={() => setModalImage(imgUrl)}
                            className="relative group/img overflow-hidden rounded-xl w-40 md:w-56 aspect-video border border-gray-100 shadow-sm snap-center shrink-0 cursor-zoom-in"
                          >
                            <img src={imgUrl} alt={`Dokumentasi ${exp.company}`} loading="lazy" decoding="async" width="224" height="126" className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110" />
                            <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}

        </div>
      </div>
      
      <ImageModal 
        isOpen={!!modalImage} 
        imageUrl={modalImage} 
        onClose={() => setModalImage(null)} 
      />
    </section>
  );
};

export default Experience;
