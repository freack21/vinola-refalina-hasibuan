import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AdminLayout = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const pwd = localStorage.getItem('adminPassword');
    if (pwd) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      // Only redirect if not already on login page
      if (window.location.pathname !== '/admin/login') {
        navigate('/admin/login');
      }
    }
    setChecking(false);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminPassword');
    setIsAuth(false);
    navigate('/admin/login');
  };

  if (checking) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {isAuth && (
        <header className="bg-brand-primary text-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <span className="bg-white/20 p-1.5 rounded-lg text-sm">CMS</span>
            Portofolio
          </h1>
          <div className="flex items-center gap-4">
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-200 hover:text-white transition-colors">
              Buka Web
            </a>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-white text-brand-primary hover:bg-gray-100 rounded-lg text-sm font-bold transition-colors shadow-sm"
            >
              Logout
            </button>
          </div>
        </header>
      )}
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
