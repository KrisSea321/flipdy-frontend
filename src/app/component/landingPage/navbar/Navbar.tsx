'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../../ui/icons/logo/Logo';
import MenuIcon from '../../ui/icons/menuIcon/MenuIcon';
import { X } from 'lucide-react'; // for close icon

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { href: 'home', label: 'Home' },
        { href: 'how-it-works', label: 'How it Works' },
        { href: 'contact', label: 'Contact' },
        { href: 'faq', label: 'FAQ' },
    ];

    const [activeSection, setActiveSection] = useState(navLinks[0].href);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // scroll highlight + background change
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight / 3;
            let current = 'home';
            navLinks.forEach(({ href }) => {
                const section = document.getElementById(href);
                if (
                    section &&
                    section.offsetTop <= scrollPos &&
                    section.offsetTop + section.offsetHeight > scrollPos
                ) {
                    current = href;
                }
            });
            setActiveSection(current);
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed  top-0 left-0 w-full z-50 transition-colors duration-300 backdrop-blur-xl ${isScrolled ? 'bg-primary/20 ' : ' bg-primary md:bg-white text-[#333333]'
                }`}
        >
            <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-20 py-3 md:py-4">
                {/* Left Logo (Visible on all screens) */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-[45px] w-[130px] md:h-[55px] md:w-[150px]">
                        <Logo />
                    </div>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            className={`px-1 py-1 text-sm font-medium transition-colors duration-200 ${activeSection === link.href
                                ? 'border-b-2 border-primary text-textColor'
                                : 'text-textColorDarkGrey hover:text-gray-400'
                                }`}
                            style={{
                                fontFamily:
                                    'Onest, -apple-system, Roboto, Helvetica, sans-serif',
                            }}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <Link
                        href="/contactus"
                        className="flex h-12 px-6 border-2 border-primary justify-center items-center rounded-full bg-white
            text-primary text-base font-medium hover:bg-primary hover:text-white transition-all duration-200"
                        style={{
                            fontFamily:
                                'Onest, -apple-system, Roboto, Helvetica, sans-serif',
                        }}
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex items-center justify-center text-primary focus:outline-none"
                >
                    {isMenuOpen ? <X size={28} className='text-white' /> : <MenuIcon />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="flex flex-col items-center bg-white border-t border-gray-200 py-4 gap-4">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            className={`text-base font-medium ${activeSection === link.href
                                ? 'text-primary'
                                : 'text-gray-700 hover:text-primary'
                                }`}
                        >
                            {link.label}
                        </button>
                    ))}

                    <Link
                        href="/contactus"
                        onClick={closeMenu}
                        className="flex h-11 px-6 border-2 border-primary justify-center items-center rounded-full bg-white
              text-primary text-sm font-medium hover:bg-primary hover:text-white transition-all duration-200"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
