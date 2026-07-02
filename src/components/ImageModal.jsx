import { useEffect } from 'react';
import { X } from 'lucide-react';

const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-primary/95 backdrop-blur-sm p-4 fade-in cursor-pointer"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 text-white p-2 hover:bg-white/20 rounded-full transition-colors z-10"
      >
        <X size={32} />
      </button>
      <img 
        src={imageUrl} 
        alt="Preview" 
        className="max-w-[95vw] max-h-[90vh] md:max-w-[90vw] md:max-h-[90vh] object-contain rounded-xl shadow-2xl scale-in cursor-default"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default ImageModal;
