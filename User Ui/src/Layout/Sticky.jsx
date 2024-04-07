import React, { useState, useEffect } from 'react';

function Sticky() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-${scrolled ? 'gray-700' : 'gray-900'} text-white transition-all duration-300`}>
      <header className="sticky top-0 py-4">
        <nav className="flex justify-center">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="h-screen bg-gray-100">
        {/* Your main content goes here */}
      </main>
    </div>
  );
}

export default Sticky;
