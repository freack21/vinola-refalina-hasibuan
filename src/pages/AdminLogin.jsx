import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('adminPassword')) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      
      if (response.ok) {
        localStorage.setItem('adminPassword', password);
        navigate('/admin');
      } else {
        setError('Password salah!');
      }
    } catch (err) {
      setError('Gagal menghubungi server.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-brand-primary text-2xl font-bold">CMS</span>
          </div>
          <h1 className="text-2xl font-bold text-brand-primary mb-2">Admin Login</h1>
          <p className="text-gray-500 text-sm">Masukkan password untuk mengelola portofolio</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
              placeholder="••••••••"
              required
            />
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm border border-red-100">
              {error}
            </div>
          )}
          
          <button 
            type="submit"
            className="w-full py-3 bg-brand-primary text-white rounded-xl font-medium hover:bg-brand-accent transition-colors shadow-lg shadow-brand-primary/20"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
