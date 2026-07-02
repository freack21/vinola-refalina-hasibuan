import { Briefcase, Users, ImageIcon } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'Magang',
      icon: <Briefcase className="text-brand-accent" size={24} />,
      company: 'PT. Perkebunan Nusantara IV Regional III (PTPN IV Reg III)',
      role: 'Akuntansi dan Keuangan',
      date: 'Juli - Agustus 2025',
      points: [
        'Mengidentifikasi kesesuaian antara faktur pajak dengan dokumen pendukung vendor, serta membuat surat tanda terima dokumen untuk mendukung kelengkapan administrasi.',
        'Memproses dan menyelesaikan 20–30 faktur pajak masukan per hari untuk diteruskan ke divisi kas sebagai dasar proses pembayaran vendor.',
        'Melakukan pengarsipan dokumen perpajakan bulanan dengan 50+ vendor, untuk memastikan dokumen tersusun secara sistematis dan mudah ditelusuri.',
        'Melakukan input dan pembaruan data vendor yang telah diproses ke dalam sistem perusahaan.'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80',
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80'
      ]
    },
    {
      type: 'Kepanitiaan',
      icon: <Users className="text-brand-accent" size={24} />,
      company: 'FEB EXPO',
      role: 'Divisi Pendanaan',
      date: 'Oktober 2024',
      points: [
        'Membantu penyusunan anggaran kegiatan.',
        'Berkoordinasi dengan sponsor, dan pihak terkait dalam proses penggalangan dana serta tindak lanjut kerjasama.',
        'Menyusun dan mengarsipkan dokumen administrasi pendanaan, termasuk proposal, bukti transaksi, dan laporan penggunaan dana.'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80',
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=500&q=80'
      ]
    },
    {
      type: 'Kepanitiaan',
      icon: <Users className="text-brand-accent" size={24} />,
      company: 'Sumatera Accounting Competition',
      role: 'Divisi Acara',
      date: 'Oktober 2024',
      points: [
        'Menyusun konsep susunan acara sesuai dengan tujuan kegiatan.',
        'Mengatur jadwal rundown kegiatan serta memastikan setiap sesi berjalan sesuai waktu yang ditentukan.',
        'Berkoordinasi dengan seluruh panitia, narasumber dan peserta untuk memastikan kelancaran pelaksanaan acara.'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&q=80'
      ]
    },
    {
      type: 'Kepanitiaan',
      icon: <Users className="text-brand-accent" size={24} />,
      company: 'Latihan Dasar Kepemimpinan',
      role: 'Divisi Publikasi',
      date: 'September 2023',
      points: [
        'Mensosialisasikan program Latihan Dasar Kepemimpinan kepada mahasiswa baru akuntansi dan berhasil mencapai target partisipasi dengan 200+ peserta.',
        'Memberikan informasi, arahan, dan pendampingan kepada peserta selama kegiatan berlangsung.',
        'Membangun komunikasi dan koordinasi dengan divisi acara untuk memastikan seluruh rangkaian kegiatan berjalan sesuai jadwal.'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">Experience.</h2>
          <div className="w-16 h-1 bg-brand-accent"></div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              
              {/* Timeline Line (Mobile only) */}
              <div className="md:hidden absolute left-0 top-2 bottom-0 w-[2px] bg-brand-secondary"></div>
              {/* Timeline Dot (Mobile only) */}
              <div className="md:hidden absolute left-[-4px] top-2 w-[10px] h-[10px] rounded-full bg-brand-accent"></div>

              <div className="grid md:grid-cols-[250px_1fr] gap-8">
                <div className="md:text-right md:pr-12 md:border-r border-brand-secondary relative">
                  {/* Timeline Dot (Desktop only) */}
                  <div className="hidden md:block absolute right-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-brand-accent shadow-[0_0_0_4px_white]"></div>
                  
                  <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-2">{exp.date}</p>
                  <p className="text-brand-text-light font-medium inline-flex items-center gap-2 md:justify-end w-full">
                    <span className="md:order-2">{exp.icon}</span>
                    <span className="md:order-1">{exp.type}</span>
                  </p>
                </div>
                
                <div className="bg-brand-background rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-50 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-1">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-brand-primary mb-6">{exp.company}</h4>
                  
                  <ul className="space-y-3 mb-8">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-brand-text-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 mt-2.5 flex-shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Gallery */}
                  {exp.gallery && exp.gallery.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3 text-brand-text font-medium text-sm">
                        <ImageIcon size={16} className="text-brand-accent" />
                        Dokumentasi
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {exp.gallery.map((imgUrl, i) => (
                          <div key={i} className="relative group overflow-hidden rounded-lg w-32 h-24 border border-gray-200 cursor-zoom-in">
                            <img src={imgUrl} alt={`Dokumentasi ${exp.role}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
