import { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { Save, Upload, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const AdminDashboard = () => {
  const { data, loading, refetchData } = useData();
  const [formData, setFormData] = useState(null);
  const [activeTab, setActiveTab] = useState('hero');
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState({ type: '', message: '' });
  
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState('');

  useEffect(() => {
    if (data) {
      setFormData(JSON.parse(JSON.stringify(data)));
    }
  }, [data]);

  if (loading || !formData) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-brand-primary h-12 w-12" />
      </div>
    );
  }

  const handleSave = async () => {
    setSaving(true);
    setSaveStatus({ type: '', message: '' });
    
    try {
      const payload = {
        ...formData,
        _adminPassword: localStorage.getItem('adminPassword')
      };
      
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSaveStatus({ type: 'success', message: 'Data berhasil disimpan!' });
        refetchData(); 
      } else {
        setSaveStatus({ type: 'error', message: result.error || 'Gagal menyimpan data.' });
      }
    } catch (err) {
      setSaveStatus({ type: 'error', message: 'Terjadi kesalahan jaringan.' });
    } finally {
      setSaving(false);
      setTimeout(() => setSaveStatus({ type: '', message: '' }), 5000);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setUploadResult('');
    
    const fd = new FormData();
    fd.append('image', file);
    fd.append('password', localStorage.getItem('adminPassword'));
    
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: fd
      });
      const result = await response.json();
      if (response.ok) {
        setUploadResult(result.imageUrl);
      } else {
        alert(result.error || 'Gagal mengunggah gambar');
      }
    } catch (err) {
      alert('Terjadi kesalahan jaringan');
    } finally {
      setUploading(false);
    }
  };

  const handleNestedChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleRawJsonChange = (section, value) => {
    try {
      const parsed = JSON.parse(value);
      setFormData(prev => ({
        ...prev,
        [section]: parsed
      }));
    } catch (e) {
      // Ignore invalid JSON while typing
    }
  };

  const tabs = [
    { id: 'hero', label: 'Hero (Beranda)' },
    { id: 'about', label: 'Tentang Saya' },
    { id: 'education', label: 'Pendidikan' },
    { id: 'contact', label: 'Kontak' },
    { id: 'advanced', label: 'Lanjutan (JSON)' },
    { id: 'upload', label: 'Upload Gambar' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <div className="w-full md:w-64 shrink-0">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
          <div className="p-4 bg-gray-50 border-b border-gray-100 font-bold text-gray-700">
            Menu Edit
          </div>
          <div className="flex flex-col">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-4 py-3 text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-brand-primary/10 text-brand-primary border-r-2 border-brand-primary' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
        
        {activeTab === 'hero' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Edit Hero Section</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Depan</label>
                <input type="text" value={formData.hero.title1} onChange={(e) => handleNestedChange('hero', 'title1', e.target.value)} className="w-full border p-2 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Belakang</label>
                <input type="text" value={formData.hero.title2} onChange={(e) => handleNestedChange('hero', 'title2', e.target.value)} className="w-full border p-2 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Deskripsi Singkat</label>
                <textarea rows="4" value={formData.hero.subtitle} onChange={(e) => handleNestedChange('hero', 'subtitle', e.target.value)} className="w-full border p-2 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">URL Foto Profil (Gunakan menu Upload untuk gambar baru)</label>
                <input type="text" value={formData.hero.image || ''} onChange={(e) => handleNestedChange('hero', 'image', e.target.value)} className="w-full border p-2 rounded-lg text-sm text-gray-600" />
                {formData.hero.image && <img src={formData.hero.image} alt="Preview" className="h-32 mt-2 rounded-lg object-cover" />}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Edit Tentang Saya</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Teks (Gunakan tag HTML dasar seperti &lt;p&gt; dan &lt;strong&gt;)</label>
                <textarea rows="10" value={formData.about.text} onChange={(e) => handleNestedChange('about', 'text', e.target.value)} className="w-full border p-2 rounded-lg font-mono text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">URL Gambar Samping</label>
                <input type="text" value={formData.about.image || ''} onChange={(e) => handleNestedChange('about', 'image', e.target.value)} className="w-full border p-2 rounded-lg text-sm text-gray-600" />
                {formData.about.image && <img src={formData.about.image} alt="Preview" className="h-32 mt-2 rounded-lg object-cover" />}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Edit Pendidikan</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Institusi</label>
                <input type="text" value={formData.education.institution} onChange={(e) => handleNestedChange('education', 'institution', e.target.value)} className="w-full border p-2 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Gelar</label>
                <input type="text" value={formData.education.degree} onChange={(e) => handleNestedChange('education', 'degree', e.target.value)} className="w-full border p-2 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Tahun/Periode</label>
                <input type="text" value={formData.education.period} onChange={(e) => handleNestedChange('education', 'period', e.target.value)} className="w-full border p-2 rounded-lg" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">IPK</label>
                  <input type="text" value={formData.education.gpa} onChange={(e) => handleNestedChange('education', 'gpa', e.target.value)} className="w-full border p-2 rounded-lg" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">IPK Maks (Mis: 4.00)</label>
                  <input type="text" value={formData.education.maxGpa} onChange={(e) => handleNestedChange('education', 'maxGpa', e.target.value)} className="w-full border p-2 rounded-lg" />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">URL Logo Institusi</label>
                <input type="text" value={formData.education.logo || ''} onChange={(e) => handleNestedChange('education', 'logo', e.target.value)} className="w-full border p-2 rounded-lg text-sm text-gray-600" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Mata Kuliah Utama (Pisahkan dengan koma)</label>
                <input 
                  type="text" 
                  value={formData.education.courses.join(', ')} 
                  onChange={(e) => handleNestedChange('education', 'courses', e.target.value.split(',').map(s => s.trim()))} 
                  className="w-full border p-2 rounded-lg" 
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Edit Kontak</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input type="email" value={formData.contact.email} onChange={(e) => handleNestedChange('contact', 'email', e.target.value)} className="w-full border p-2 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">WhatsApp (Format bebas, sistem akan otomatis membersihkan untuk link)</label>
                <input type="text" value={formData.contact.whatsapp} onChange={(e) => handleNestedChange('contact', 'whatsapp', e.target.value)} className="w-full border p-2 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nama LinkedIn</label>
                <input type="text" value={formData.contact.linkedin} onChange={(e) => handleNestedChange('contact', 'linkedin', e.target.value)} className="w-full border p-2 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">URL LinkedIn</label>
                <input type="text" value={formData.contact.linkedinUrl} onChange={(e) => handleNestedChange('contact', 'linkedinUrl', e.target.value)} className="w-full border p-2 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Lokasi</label>
                <input type="text" value={formData.contact.location} onChange={(e) => handleNestedChange('contact', 'location', e.target.value)} className="w-full border p-2 rounded-lg" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'advanced' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Edit Data Lanjutan (JSON)</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex items-start gap-3">
              <AlertCircle className="text-yellow-600 shrink-0 mt-0.5" size={20} />
              <div className="text-sm text-yellow-800">
                <p className="font-bold">Hati-hati!</p>
                <p>Edit menggunakan format JSON murni. Pastikan sintaks JSON valid sebelum menekan tombol simpan.</p>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Pengalaman (Experience)</label>
              <textarea 
                rows="8" 
                defaultValue={JSON.stringify(formData.experience, null, 2)}
                onBlur={(e) => handleRawJsonChange('experience', e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg font-mono text-sm bg-gray-50 focus:bg-white" 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Skills (Teknikal & Soft)</label>
              <textarea 
                rows="8" 
                defaultValue={JSON.stringify(formData.skills, null, 2)}
                onBlur={(e) => handleRawJsonChange('skills', e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg font-mono text-sm bg-gray-50 focus:bg-white" 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Training / Pelatihan</label>
              <textarea 
                rows="8" 
                defaultValue={JSON.stringify(formData.training, null, 2)}
                onBlur={(e) => handleRawJsonChange('training', e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg font-mono text-sm bg-gray-50 focus:bg-white" 
              />
            </div>
          </div>
        )}

        {activeTab === 'upload' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Upload Gambar Baru</h2>
            <p className="text-gray-600">Unggah gambar di sini untuk mendapatkan URL yang bisa disalin ke dalam form data (contohnya logo, dokumentasi, foto profil).</p>
            
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-brand-primary transition-colors bg-gray-50">
              <input 
                type="file" 
                id="imageUpload" 
                accept="image/*" 
                className="hidden" 
                onChange={handleImageUpload}
                disabled={uploading}
              />
              <label htmlFor="imageUpload" className="cursor-pointer flex flex-col items-center">
                {uploading ? (
                  <Loader2 className="animate-spin text-brand-primary mb-4" size={48} />
                ) : (
                  <Upload className="text-gray-400 mb-4" size={48} />
                )}
                <span className="text-brand-primary font-bold bg-white px-4 py-2 border border-brand-primary/20 rounded-lg hover:bg-brand-primary hover:text-white transition-colors shadow-sm">
                  {uploading ? 'Mengunggah...' : 'Pilih File Gambar'}
                </span>
                <span className="text-xs text-gray-500 mt-2">Maks. 5MB (JPG, PNG)</span>
              </label>
            </div>
            
            {uploadResult && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg shadow-inner">
                <p className="text-green-800 font-bold flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} /> Berhasil diunggah!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <img src={uploadResult} alt="Uploaded" className="w-24 h-24 object-cover rounded-lg shadow border border-green-200 bg-white" />
                  <div className="flex-1 w-full">
                    <p className="text-sm text-gray-600 mb-1">Copy URL di bawah ini untuk disisipkan ke form data:</p>
                    <input 
                      type="text" 
                      readOnly 
                      value={uploadResult} 
                      className="w-full bg-white border border-green-300 focus:outline-none focus:border-green-500 p-2.5 rounded-lg text-sm font-mono text-gray-700 shadow-sm"
                      onClick={e => {
                        e.target.select();
                        navigator.clipboard.writeText(e.target.value);
                      }}
                    />
                    <p className="text-xs text-gray-400 mt-1">Klik pada URL untuk otomatis copy.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Action Bar */}
        <div className="mt-8 pt-6 border-t flex items-center justify-between sticky bottom-0 bg-white pb-2 z-10">
          <div className="flex-1">
            {saveStatus.message && (
              <span className={`text-sm font-bold flex items-center gap-2 ${saveStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {saveStatus.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                {saveStatus.message}
              </span>
            )}
          </div>
          <button 
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-accent transition-all disabled:opacity-70 shadow-lg shadow-brand-primary/20"
          >
            {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
            Simpan Perubahan
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
