import { Mail, MessageCircle, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-primary text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together.</h2>
        <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto mb-12">
          Saya siap membawa kontribusi maksimal untuk mengelola administrasi keuangan dan perpajakan di perusahaan Anda. Jangan ragu untuk menghubungi saya.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          
          <a href="mailto:vinolahasibuan28@gmail.com" className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="text-brand-accent" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300 font-light text-sm">vinolahasibuan28@gmail.com</p>
          </a>
          
          <a href="https://wa.me/6289506534108" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="text-brand-accent" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-300 font-light text-sm">0895 0653 4108</p>
          </a>

          <a href="https://www.linkedin.com/in/vinolarefalinahsb" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Globe className="text-brand-accent" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-300 font-light text-sm">Vinola Refalina Hasibuan</p>
          </a>
          
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-2 text-gray-400">
          <MapPin size={18} />
          <span>Pekanbaru, Riau, Indonesia</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
