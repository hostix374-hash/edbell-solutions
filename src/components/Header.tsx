'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, User, LogOut } from 'lucide-react';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedIn = localStorage.getItem('isLoggedIn');
      const email = localStorage.getItem('userEmail');
      
      if (loggedIn === 'true' && email) {
        setIsAuthenticated(true);
        setUserEmail(email);
      }
    }
  }, []);

  // Handle scroll effect for fixed header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsAuthenticated(false);
    setUserEmail('');
    router.push('/');
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Universities', href: '/universities', image: '/about-campus.jpg' },
    { name: 'Courses', href: '/courses', image: '/about-professional.jpg' },
    { name: 'Services', href: '/services', image: '/about-team.jpg' },
    { name: 'Gallery', href: '/gallery', image: '/about-campus.jpg' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled 
        ? 'bg-white backdrop-blur-md border-b border-gray-200 shadow-lg' 
        : 'bg-white backdrop-blur-md border-b border-gray-100 shadow-md'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            {/* Logo Image Only */}
            <img 
              src="/edbell-logo.png" 
              alt="EdBell EduSolutions" 
              className="h-8 sm:h-10 lg:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              onError={(e) => {
                // If image fails to load, replace with fallback
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback if logo doesn't load */}
            <div className="h-8 sm:h-10 lg:h-16 hidden items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-base sm:text-lg lg:text-xl">E</span>
                </div>
                <div className="block">
                  <h1 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900">EdBell</h1>
                  <p className="text-xs text-gray-600 -mt-1 hidden sm:block">Education Solutions</p>
                </div>
              </div>
            </div>
          </Link>
                  <p className="text-xs text-gray-500 -mt-1">Education Solutions</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3 xl:px-4 py-2 text-sm xl:text-base font-medium text-gray-700 hover:text-blue-600 rounded-lg transition-all duration-200 mobile-touch-target block"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-8 group-hover:left-1/2 transform -translate-x-1/2"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            {/* Authentication */}
            {isAuthenticated ? (
              <div className="hidden md:flex items-center space-x-2">
                <Link
                  href="/admin"
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden lg:inline">Dashboard</span>
                </Link>
                <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-600 max-w-16 lg:max-w-20 truncate">
                    {userEmail.split('@')[0]}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden lg:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-2 lg:space-x-3">
                <Link
                  href="/contact"
                  className="btn-ghost text-xs sm:text-sm px-2 sm:px-3 lg:px-4 py-2"
                >
                  <span className="hidden md:inline">Get Started</span>
                  <span className="md:hidden">Start</span>
                </Link>
                <Link
                  href="/login"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-xs sm:text-sm flex items-center space-x-1 sm:space-x-2"
                >
                  <User className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Login</span>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Menu button clicked, current state:', isMenuOpen);
                setIsMenuOpen(!isMenuOpen);
              }}
              className="lg:hidden p-2 sm:p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-gray-900 bg-white hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 z-50 relative active:scale-95 border-2 border-gray-900 shadow-sm"
              aria-label="Toggle menu"
              type="button"
            >
              {isMenuOpen ? <X className="h-6 w-6 sm:h-6 sm:w-6 stroke-[2.5]" /> : <Menu className="h-6 w-6 sm:h-6 sm:w-6 stroke-[2.5]" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[110]">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <div className="absolute top-0 right-0 bottom-0 w-[85vw] max-w-[320px] bg-white shadow-2xl overflow-y-auto">
              <div className="flex flex-col min-h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
                  <div className="flex items-center">
                    {/* Logo Image Only */}
                    <img 
                      src="/edbell-logo.png" 
                      alt="EdBell EduSolutions" 
                      className="h-8 w-auto object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    {/* Fallback */}
                    <div className="hidden items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">E</span>
                      </div>
                      <span className="font-bold text-gray-900 text-sm">EdBell</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg text-gray-900 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6 stroke-[2.5]" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 py-4 px-3">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3.5 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 border-b border-gray-100 last:border-0"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
                
                {/* Mobile Auth Section */}
                <div className="border-t border-gray-200 p-4 bg-gray-50">
                  {isAuthenticated ? (
                    <div className="space-y-2">
                      <Link
                        href="/admin"
                        className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-gray-900 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <User className="h-5 w-5" />
                        <span>Admin Dashboard</span>
                      </Link>
                      <div className="px-4 py-2 text-xs text-gray-600 bg-white rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="truncate">Logged in as: {userEmail}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-white rounded-lg transition-all duration-200"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Link
                        href="/contact"
                        className="block px-4 py-3 text-center text-base font-medium text-gray-900 hover:text-blue-600 bg-white hover:bg-blue-50 rounded-lg transition-all duration-200 border border-gray-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                      <Link
                        href="/login"
                        className="block px-4 py-3 text-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Login
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;