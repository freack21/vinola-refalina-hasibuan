import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Contact = ({ data }) => {
  if (!data) return null;

  return (
    <section id="contact" className="py-24 bg-brand-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Mari Terhubung!</h2>
        <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-16">
          Saya terbuka untuk peluang profesional, diskusi, maupun kolaborasi.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          
          <a href={`mailto:${data.email}`} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all">
              <Mail className="text-brand-accent" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300 font-light text-sm">{data.email}</p>
          </a>
          
          <a href={`https://wa.me/62${data.whatsapp.replace(/[^0-9]/g, '').substring(1)}`} target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all">
              <Phone className="text-brand-accent" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-300 font-light text-sm">{data.whatsapp}</p>
          </a>
          
          <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all">
              <Globe className="text-brand-accent" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-300 font-light text-sm">{data.linkedin}</p>
          </a>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-brand-accent" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lokasi</h3>
            <p className="text-gray-300 font-light text-sm text-center">{data.location}</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
