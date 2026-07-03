import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider, useData } from './context/DataContext';

import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CustomScrollbar from './components/CustomScrollbar';

const About = React.lazy(() => import('./components/About'));
const Education = React.lazy(() => import('./components/Education'));
const Experience = React.lazy(() => import('./components/Experience'));
const Skills = React.lazy(() => import('./components/Skills'));
const Training = React.lazy(() => import('./components/Training'));
const Contact = React.lazy(() => import('./components/Contact'));

import AdminLayout from './pages/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';

const Portfolio = () => {
  const { data, loading, error } = useData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-background text-brand-text">
        <p className="text-xl text-red-500 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-accent transition-colors"
        >
          Muat Ulang
        </button>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-brand-background selection:bg-brand-accent/30 selection:text-brand-text">
      <Navbar />
      <main>
        <Hero data={data.hero} />
        <Suspense fallback={<div className="py-24 text-center text-brand-text-light">Loading sections...</div>}>
          <About data={data.about} />
          <Education data={data.education} />
          <Experience data={data.experience} />
          <Skills data={data.skills} />
          <Training data={data.training} />
          <Contact data={data.contact} />
        </Suspense>
      </main>
      <Footer />
      <CustomScrollbar />
    </div>
  );
};

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="login" element={<AdminLogin />} />
          </Route>
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
