import { ArrowRight, Download } from 'lucide-react';

const Hero = ({ data }) => {
  if (!data) return null;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-secondary">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 fade-in py-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-brand-text">
            {data.title1} <br />
            <span className="text-brand-primary">{data.title2}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-text-light max-w-md font-light leading-relaxed">
            {data.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#about" className="px-8 py-4 bg-brand-primary text-white rounded-full font-medium hover:bg-brand-accent transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-accent/30 flex items-center gap-2 group">
              Kenali Lebih Lanjut
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/cv.pdf" download className="px-8 py-4 bg-white text-brand-text rounded-full font-medium border border-gray-200 hover:border-brand-primary hover:text-brand-primary transition-all flex items-center gap-2">
              <Download size={18} />
              Unduh CV
            </a>
          </div>
        </div>

        <div className="relative fade-in hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent rounded-full transform scale-105 blur-lg"></div>
          <img 
            src={data.image || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"} 
            alt="Vinola Profile" 
            className="w-full max-w-md mx-auto relative z-10 rounded-3xl shadow-2xl object-cover aspect-[4/5] transform hover:scale-[1.02] transition-transform duration-500"
          />
          
          {/* Floating Element */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-2xl">✨</span>
              </div>
              <div>
                <p className="font-bold text-gray-800">Fresh Graduate</p>
                <p className="text-sm text-gray-500">Siap Bekerja</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
