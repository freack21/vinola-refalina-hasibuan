import { GraduationCap, BookOpen, MapPin } from 'lucide-react';

const Education = ({ data }) => {
  if (!data) return null;

  return (
    <section id="education" className="py-24 bg-brand-background border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">Education.</h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-secondary/80 transition-colors duration-500"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            {/* University Logo */}
            <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0 p-3">
              <img 
                src={data.logo || "https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_Universitas_Riau.png"} 
                alt="Logo Universitas Riau" 
                loading="lazy"
                decoding="async"
                width="72"
                height="72"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <div className="inline-block px-4 py-1.5 bg-brand-secondary text-brand-text font-semibold text-sm rounded-full mb-4">
                {data.period}
              </div>
              
              <h3 className="text-3xl font-bold text-brand-primary mb-2">{data.institution}</h3>
              <p className="text-xl text-brand-text font-medium mb-4 flex items-center justify-center md:justify-start gap-2">
                <GraduationCap size={24} className="text-brand-accent" />
                {data.degree}
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                <div className="flex items-center gap-2 bg-brand-secondary/50 px-4 py-2 rounded-lg text-brand-text">
                  <span className="font-medium">IPK:</span>
                  <span className="font-bold text-brand-primary text-lg">{data.gpa}</span>
                  <span className="text-sm text-brand-text-light">/ {data.maxGpa}</span>
                </div>
                <div className="flex items-center gap-2 text-brand-text-light text-sm bg-gray-50 px-4 py-2 rounded-lg">
                  <MapPin size={16} />
                  Pekanbaru, Riau
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-lg font-semibold text-brand-text mb-4 flex items-center justify-center md:justify-start gap-2">
                  <BookOpen size={20} className="text-brand-accent" />
                  Mata Kuliah Utama
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm">
                  {data.courses && data.courses.map((course, index) => (
                    <span key={index} className="px-4 py-2 bg-brand-background border border-gray-100 rounded-full text-brand-text-light hover:border-brand-accent/50 hover:text-brand-text transition-colors">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
