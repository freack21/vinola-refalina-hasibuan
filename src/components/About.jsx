const About = ({ data }) => {
  if (!data) return null;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 md:order-1 relative">
          <div className="absolute inset-0 bg-brand-secondary transform translate-x-4 translate-y-4 rounded-xl -z-10"></div>
          <img 
            src={data.image || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop"} 
            alt="Accounting & Finance Workspace" 
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
        
        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">About Me.</h2>
          <div className="w-16 h-1 bg-brand-accent mb-8"></div>
          
          <div 
            className="space-y-6 text-brand-text-light text-lg font-light leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data.text }}
          />
        </div>

      </div>
    </section>
  );
};

export default About;
