import { motion } from "framer-motion";
import { Link } from "wouter";
import { Twitter, Instagram, Linkedin, Search } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "AI Tools", href: "/ai-tools", submenu: ["SEO", "AI", "Automation", "Generative Tools"] },
  { label: "Platforms", href: "/platforms", submenu: ["Facebook", "Instagram", "Shopping", "Google Ads"] },
  { label: "SEO", href: "/seo", submenu: ["AEO", "AIO", "Content Marketing", "GEO"] },
  { label: "Psychology", href: "/psychology", submenu: ["B2B", "B2C", "Ecommerce"] },
  { label: "Branding", href: "/branding", submenu: ["B2B", "B2C"] },
  { label: "Updates", href: "/updates", submenu: ["Algorithms", "Content", "Media"] },
];

export default function TermsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <header className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-[0_3px_5px_0_rgba(0,0,0,.16),0_3px_5px_0_rgba(0,0,0,.23)]' : ''}`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-3xl font-serif font-bold tracking-tight hover:opacity-80 transition-opacity">Editorial.</Link>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative group">
                  <Link href={link.href} className="text-sm font-medium tracking-wide hover:text-accent transition-colors flex items-center gap-1 uppercase tracking-widest">
                    {link.label}
                    <span className="text-[10px] opacity-50 group-hover:rotate-180 transition-transform duration-300">▼</span>
                  </Link>
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white border border-border shadow-xl py-4 w-48 rounded-sm">
                      {link.submenu?.map((item) => (
                        <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="block px-6 py-2 text-xs font-medium text-black hover:bg-secondary hover:text-accent transition-colors">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-6xl font-serif font-bold mb-12">Terms of Service</h1>
          <div className="prose prose-lg prose-gray max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-black">1. Agreement to Terms</h2>
              <p className="text-gray-500 leading-relaxed">
                By accessing our website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-black">2. Use License</h2>
              <p className="text-gray-500 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on Editorial's website for personal, non-commercial transitory viewing only.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-black">3. Disclaimer</h2>
              <p className="text-gray-500 leading-relaxed">
                The materials on Editorial's website are provided on an 'as is' basis. Editorial makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Link href="/" className="text-6xl font-serif font-bold tracking-tight">MSWOT.</Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 px-4 border-t border-white/10">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6 text-sm font-semibold tracking-wide uppercase opacity-60">
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
