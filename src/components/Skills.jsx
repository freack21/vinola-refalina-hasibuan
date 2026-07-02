import { CheckCircle2, Award } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    'Microsoft Office (Word, Excel, PowerPoint)',
    'Fungsi Lanjutan Excel (HLOOKUP, VLOOKUP, INDEX-MATCH)',
    'Google Docs & Spreadsheet',
    'Accurate Accounting Software',
    'Sistem Coretax DJP',
    'Canva'
  ];

  const softSkills = [
    'Disiplin & Manajemen Waktu',
    'Teliti & Analitis',
    'Problem Solving',
    'Kerjasama Tim',
    'Komunikasi yang Baik'
  ];

  const trainings = [
    {
      title: 'Short Class My Skill',
      date: 'April 2025',
      desc: 'Pengolahan data Excel (HLOOKUP, VLOOKUP, INDEX-MATCH) untuk efisiensi pengelolaan data.'
    },
    {
      title: 'Webinar Coretax DJP',
      date: 'Maret 2025',
      desc: 'Mempelajari sistem Coretax DJP dan fitur-fitur administrasi perpajakan digital.'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">Skills & Training.</h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Skills Column */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-brand-accent" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <span key={skill} className="bg-white border border-gray-200 text-brand-text-light px-4 py-2 rounded text-sm font-medium hover:border-brand-accent hover:text-brand-primary transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-brand-accent" />
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span key={skill} className="bg-brand-primary text-white px-4 py-2 rounded text-sm font-medium cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Trainings Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-brand-text mb-6 flex items-center gap-2">
              <Award className="text-brand-accent" />
              Professional Training
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {trainings.map((training, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">{training.date}</div>
                  <h4 className="text-xl font-bold text-brand-primary mb-3">{training.title}</h4>
                  <p className="text-brand-text-light leading-relaxed">{training.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
