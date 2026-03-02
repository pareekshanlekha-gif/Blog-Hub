import { motion } from "framer-motion";
import { Link } from "wouter";
import { Twitter, Instagram, Linkedin, Search, Send, Mail, MapPin, Phone } from "lucide-react";
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

export default function ContactPage() {
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
        <section className="py-24 bg-gray-50 border-b border-border">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-8 text-black">
                Let's Start a <br/> Conversation.
              </h1>
              <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
                Whether you're looking for editorial partnership, media inquiries, or just want to share a story - our doors are always open.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
              {/* Form */}
              <div className="lg:col-span-7">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-0 py-4 bg-transparent border-b border-border focus:border-black focus:outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-0 py-4 bg-transparent border-b border-border focus:border-black focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject</label>
                    <select className="w-full px-0 py-4 bg-transparent border-b border-border focus:border-black focus:outline-none transition-colors">
                      <option>General Inquiry</option>
                      <option>Partnership</option>
                      <option>Media Kit</option>
                      <option>Advertising</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
                    <textarea rows={6} placeholder="Tell us more about your inquiry..." className="w-full px-0 py-4 bg-transparent border-b border-border focus:border-black focus:outline-none transition-colors resize-none"></textarea>
                  </div>
                  <button className="flex items-center gap-4 px-12 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-accent transition-all rounded-sm group">
                    Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Info */}
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-black">Inquiries</h3>
                  <div className="space-y-2 text-gray-500">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-accent" />
                      <a href="mailto:hello@mswot.com" className="hover:text-black transition-colors">hello@mswot.com</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-accent" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-black">Studio</h3>
                  <div className="flex items-start gap-3 text-gray-500">
                    <MapPin className="w-4 h-4 text-accent mt-1" />
                    <p>
                      123 Editorial Lane<br/>
                      Design District<br/>
                      New York, NY 10013
                    </p>
                  </div>
                </div>

                <div className="p-8 bg-black text-white rounded-2xl space-y-4">
                  <h4 className="font-bold uppercase tracking-widest text-xs">Work with us</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We're always looking for talented writers, designers, and researchers to join our collective.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                    View Careers <ArrowRight className="w-4 h-4" />
                  </a>
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
              <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/auth" className="hover:text-white transition-colors">Login</Link>
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
