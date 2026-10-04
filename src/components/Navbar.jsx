import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar({ onQuoteClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Coverage', href: '#coverage' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/95 backdrop-blur-md shadow-md border-b border-brand-dark-border py-3.5'
          : 'bg-brand-dark border-b border-brand-dark-border/60 py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-btn"
          >
            <div className="w-10 h-10 rounded-btn bg-brand-accent flex items-center justify-center text-brand-dark font-heading font-black text-xl shadow-card transition-transform group-hover:scale-105">
              NL
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-2xl text-white tracking-tight">
                  Nusa<span className="text-brand-accent">Lift</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-brand-dark-border text-amber-400 px-1.5 py-0.5 rounded">
                  HEAVY
                </span>
              </div>
              <p className="text-[11px] text-gray-400 tracking-wider uppercase font-medium">
                Equipment Rental
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-brand-accent transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-accent hover:after:w-full after:transition-all focus:outline-none focus:text-brand-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA & Contact */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="hidden xl:flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-white transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-brand-accent" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-btn bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-semibold shadow-card hover:shadow-accent-glow transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent focus:ring-offset-brand-dark"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onQuoteClick}
              className="px-3 py-1.5 rounded-btn bg-brand-accent text-white text-xs font-semibold focus:outline-none"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-btn text-gray-300 hover:text-white hover:bg-brand-dark-surface focus:outline-none focus:ring-2 focus:ring-brand-accent"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-brand-dark-border/80 bg-brand-dark animate-fadeIn">
            <nav className="flex flex-col gap-2 pb-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-btn text-base font-medium text-gray-200 hover:bg-brand-dark-surface hover:text-brand-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-brand-dark-border mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onQuoteClick();
                  }}
                  className="w-full py-3 rounded-btn bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold text-center text-sm flex items-center justify-center gap-2"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
