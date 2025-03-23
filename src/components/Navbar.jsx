import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Features', href: '#features' },
        { name: 'About Us', href: '#about' },
        { name: 'Illustrations', href: '#illustrations' },
        { name: 'Innovations', href: '#innovations' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/80 backdrop-blur-lg shadow-md' : 'py-6 bg-transparent'
            }`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-2xl font-display font-bold tracking-tighter">
                    Lumi<span className="text-blue-500">.</span>
                </a>

                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navItems.map((item, index) => (
                        <a key={index} href={item.href} className="hover:text-blue-500 transition-colors">
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="text-sm font-medium px-4 py-2 rounded-md hover:bg-secondary transition-colors">
                        Log in
                    </a>
                    <a href="#" className="btn-primary text-sm">
                        Get Started
                    </a>
                </div>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg py-6 animate-slide-down">
                    <nav className="container mx-auto px-6 flex flex-col gap-4">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="py-2 text-center hover:text-blue-500 transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}

                        <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                            <a href="#" className="py-2 text-center hover:bg-secondary rounded-md transition-colors">
                                Log in
                            </a>
                            <a href="#" className="btn-primary text-center">
                                Get Started
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
