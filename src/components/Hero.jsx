import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-secondary">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 rounded-bl-[100px] md:rounded-bl-[200px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 fade-in">
          <div className="inline-flex items-center gap-2 text-brand-accent font-semibold tracking-wider text-sm uppercase">
            <span className="w-8 h-[2px] bg-brand-accent"></span>
            Finance & Accounting Professional
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-brand-text">
            Vinola <br />
            <span className="text-brand-primary">Refalina Hasibuan</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-text-light max-w-md font-light leading-relaxed">
            Fresh Graduate Akuntansi dengan spesialisasi di bidang Keuangan dan Perpajakan. Berdedikasi untuk mengubah kompleksitas data menjadi kejelasan strategis.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#contact" className="flex items-center gap-2 bg-brand-primary text-brand-secondary px-8 py-4 rounded font-medium hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Let's Connect <ArrowRight size={18} />
            </a>
            <a href="https://tinyurl.com/sertifikat-vinola" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-brand-text px-8 py-4 rounded font-medium border border-gray-200 hover:border-brand-accent hover:text-brand-accent transition-all shadow-sm">
              View Certificates <Download size={18} />
            </a>
          </div>
        </div>
        
        <div className="relative fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
              alt="Vinola Refalina Hasibuan" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
          </div>
          
          {/* Decorative Card */}
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl hidden md:block">
            <div className="text-3xl font-bold text-brand-primary mb-1">3.80</div>
            <div className="text-sm font-medium text-brand-text-light uppercase tracking-wider">GPA (Cum Laude)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
