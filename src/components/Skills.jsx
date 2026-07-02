import { 
  FileSpreadsheet, Calculator, FileText, LayoutTemplate,
  MonitorCheck, CheckSquare, Clock, Lightbulb, Search,
  Users, MessageSquare
} from 'lucide-react';

const IconMap = {
  FileSpreadsheet, Calculator, FileText, LayoutTemplate,
  MonitorCheck, CheckSquare, Clock, Lightbulb, Search,
  Users, MessageSquare
};

const Skills = ({ data }) => {
  if (!data) return null;

  return (
    <section id="skills" className="py-24 bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">Skills & Expertise.</h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Technical Skills */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-text mb-8 border-b border-gray-100 pb-4">
              Technical Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.technical && data.technical.map((skill, index) => {
                const Icon = IconMap[skill.iconName] || FileText;
                return (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-brand-accent/50 hover:shadow-sm transition-all group">
                    <div className="bg-white p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                      <Icon size={20} className="text-brand-accent" />
                    </div>
                    <span className="font-medium text-brand-text text-sm">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-brand-primary text-white rounded-2xl p-8 md:p-10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-accent/20 rounded-full blur-2xl"></div>
            
            <h3 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4 relative z-10">
              Soft Skills
            </h3>
            <div className="flex flex-col gap-4 relative z-10">
              {data.soft && data.soft.map((skill, index) => {
                const Icon = IconMap[skill.iconName] || Clock;
                return (
                  <div key={index} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Icon size={20} className="text-brand-secondary" />
                    </div>
                    <span className="font-medium text-gray-100">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
