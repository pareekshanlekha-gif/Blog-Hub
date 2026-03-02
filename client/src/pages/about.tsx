import { motion } from "framer-motion";
import { Link } from "wouter";
import { Twitter, Instagram, Linkedin, Search, ArrowRight, Award, Users, Globe, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from "../assets/logo.png";

const NAV_LINKS = [
  { label: "AI Tools", href: "/ai-tools", submenu: ["SEO", "AI", "Automation", "Generative Tools"] },
  { label: "Platforms", href: "/platforms", submenu: ["Facebook", "Instagram", "Shopping", "Google Ads"] },
  { label: "SEO", href: "/seo", submenu: ["AEO", "AIO", "Content Marketing", "GEO"] },
  { label: "Psychology", href: "/psychology", submenu: ["B2B", "B2C", "Ecommerce"] },
  { label: "Branding", href: "/branding", submenu: ["B2B", "B2C"] },
  { label: "Updates", href: "/updates", submenu: ["Algorithms", "Content", "Media"] },
];

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-[0_3px_5px_0_rgba(0,0,0,.16),0_3px_5px_0_rgba(0,0,0,.23)]' : ''}`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logoImg} alt="MSWOT Logo" className="h-10 w-auto object-contain" />
          </Link>
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
            <div className="h-4 w-px bg-border mx-2"></div>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-24 bg-black text-white overflow-hidden relative">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="inline-block mb-6 text-accent font-bold tracking-[0.3em] uppercase text-xs">Our Mission</span>
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-8">
                Defining the <br/> Modern Aesthetic.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
                MSWOT is a digital publication dedicated to the intersection of technology, culture, and high-end design. We believe in quality over noise.
              </p>
            </motion.div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-l from-accent/20 to-transparent blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-8 text-black">The Editorial Standard</h2>
                <div className="space-y-6 text-gray-500 leading-relaxed text-lg">
                  <p>
                    Founded in 2026, MSWOT began as a small research collective exploring the psychological impact of digital environments. Today, we've grown into a global editorial platform reaching millions of creative professionals.
                  </p>
                  <p>
                    We don't just report on news; we analyze the underlying trends that shape our daily lives. From the rise of generative AI to the resurgence of analog media, our mission is to provide clarity in an increasingly complex digital landscape.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 border border-border rounded-2xl flex flex-col gap-4 hover:shadow-xl transition-shadow">
                  <Globe className="w-8 h-8 text-accent" />
                  <h3 className="font-bold uppercase tracking-widest text-black">Global Reach</h3>
                  <p className="text-sm text-gray-500">Connecting millions of readers across 120+ countries.</p>
                </div>
                <div className="p-8 border border-border rounded-2xl flex flex-col gap-4 hover:shadow-xl transition-shadow">
                  <Users className="w-8 h-8 text-accent" />
                  <h3 className="font-bold uppercase tracking-widest text-black">Expert Network</h3>
                  <p className="text-sm text-gray-500">Collaborating with the world's leading design thinkers.</p>
                </div>
                <div className="p-8 border border-border rounded-2xl flex flex-col gap-4 hover:shadow-xl transition-shadow">
                  <Award className="w-8 h-8 text-accent" />
                  <h3 className="font-bold uppercase tracking-widest text-black">Award Winning</h3>
                  <p className="text-sm text-gray-500">Recognized for excellence in digital journalism.</p>
                </div>
                <div className="p-8 border border-border rounded-2xl flex flex-col gap-4 hover:shadow-xl transition-shadow">
                  <Zap className="w-8 h-8 text-accent" />
                  <h3 className="font-bold uppercase tracking-widest text-black">Fast Content</h3>
                  <p className="text-sm text-gray-500">Real-time updates on the latest tech breakthroughs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (Same as homepage) */}
      <footer className="bg-black text-white pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-16">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <img src={logoImg} alt="MSWOT Logo" className="h-16 w-auto object-contain brightness-0 invert" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {NAV_LINKS.map(link => (
              <div key={link.label} className="text-left">
                <Link href={link.href} className="text-xl font-bold hover:text-accent transition-colors mb-6 block">{link.label}</Link>
                <div className="flex flex-col items-start gap-y-3 opacity-50">
                  {link.submenu.map(sub => (
                    <Link key={sub} href={`/${sub.toLowerCase().replace(' ', '-')}`} className="text-xs hover:text-white transition-colors uppercase tracking-[0.15em] font-medium">
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 px-4 border-t border-white/10">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6 text-sm font-semibold tracking-wide uppercase opacity-60">
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-10 mt-12 text-center opacity-30 text-[11px] uppercase tracking-[0.25em]">
            Powered by : MSWOT, 2026.
          </div>
        </div>
      </footer>
    </div>
  );
}
