import { useEffect, useState, useRef } from 'react';

const CustomScrollbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDragging) {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight > 0) {
          setScrollProgress(window.scrollY / scrollHeight);
        } else {
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isDragging]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !trackRef.current) return;
    
    const trackRect = trackRef.current.getBoundingClientRect();
    const thumbHeight = trackRect.height * 0.2; // 20%
    const maxScrollPixels = trackRect.height - thumbHeight;
    
    let newY = e.clientY - trackRect.top - (thumbHeight / 2);
    newY = Math.max(0, Math.min(newY, maxScrollPixels));
    
    const progress = newY / maxScrollPixels;
    setScrollProgress(progress);
    
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo(0, progress * scrollHeight);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    e.target.releasePointerCapture(e.pointerId);
  };

  return (
    <div 
      ref={trackRef}
      className="fixed top-1 bottom-1 right-1 w-1.5 z-[100] transition-all duration-300 hover:w-2.5 group pointer-events-none"
    >
      <div 
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`w-full bg-brand-primary/50 group-hover:bg-brand-primary rounded-full cursor-grab active:cursor-grabbing absolute right-0 transition-colors pointer-events-auto ${isDragging ? 'bg-brand-primary' : ''}`}
        style={{
          height: '20%',
          top: `${scrollProgress * 80}%`,
          touchAction: 'none'
        }}
      />
    </div>
  );
};

export default CustomScrollbar;
