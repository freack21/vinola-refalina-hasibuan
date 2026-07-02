import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">Education.</h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Decorative watermark */}
          <GraduationCap className="absolute -top-10 -right-10 w-64 h-64 text-brand-secondary opacity-50" strokeWidth={1} />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-start">
            <div className="flex gap-6 items-center">
              <div className="hidden md:flex items-center justify-center bg-white p-2 rounded-full shadow-md w-24 h-24 flex-shrink-0">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_Universitas_Riau.png" alt="Logo UNRI" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="md:hidden bg-white p-1 rounded-full shadow-sm w-10 h-10 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Logo_Universitas_Riau.png" alt="Logo UNRI" className="w-8 h-8 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-text">Universitas Riau</h3>
                </div>
                <p className="text-xl text-brand-primary font-medium mb-1">S1 Akuntansi</p>
                <p className="text-brand-text-light">2022 - 2026</p>
              </div>
            </div>
            
            <div className="bg-brand-secondary px-6 py-4 rounded-xl border border-brand-accent/20 text-center min-w-[150px]">
              <p className="text-sm font-medium text-brand-text-light uppercase tracking-widest mb-1">IPK</p>
              <p className="text-3xl font-bold text-brand-primary">3.80<span className="text-lg text-brand-text-light font-normal">/4.00</span></p>
            </div>
          </div>
          
          <div className="relative z-10 mt-10 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-brand-accent" size={20} />
              <h4 className="text-lg font-semibold text-brand-text">Mata Kuliah Relevan:</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Praktek Penyusunan Laporan Keuangan', 'Analisis Laporan Keuangan', 'Praktek Perpajakan', 'PPN'].map((course) => (
                <span key={course} className="bg-brand-primary/5 text-brand-primary px-4 py-2 rounded-full text-sm font-medium border border-brand-primary/10">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
