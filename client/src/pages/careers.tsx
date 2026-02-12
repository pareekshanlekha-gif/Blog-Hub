import { motion } from "framer-motion";
import { Link } from "wouter";
import { Twitter, Instagram, Linkedin, Search, Briefcase, GraduationCap, Users } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "AI Tools", href: "/ai-tools", submenu: ["SEO", "AI", "Automation", "Generative Tools"] },
  { label: "Platforms", href: "/platforms", submenu: ["Facebook", "Instagram", "Shopping", "Google Ads"] },
  { label: "SEO", href: "/seo", submenu: ["AEO", "AIO", "Content Marketing", "GEO"] },
  { label: "Psychology", href: "/psychology", submenu: ["B2B", "B2C", "Ecommerce"] },
  { label: "Branding", href: "/branding", submenu: ["B2B", "B2C"] },
  { label: "Updates", href: "/updates", submenu: ["Algorithms", "Content", "Media"] },
];

export default function CareersPage() {
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
            <div className="h-4 w-px bg-border mx-2"></div>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-8">
                Build the Future of <br/> Editorial.
              </h1>
              <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                We are a collective of thinkers, designers, and creators redefining how knowledge is shared. Join us on our mission to clarify the complex.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
              <div className="space-y-4">
                <Briefcase className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-serif font-bold">Remote-First</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Work from anywhere in the world. We believe talent isn't bound by geography.</p>
              </div>
              <div className="space-y-4">
                <GraduationCap className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-serif font-bold">Growth</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Annual learning budget and mentorship programs to help you reach your peak.</p>
              </div>
              <div className="space-y-4">
                <Users className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-serif font-bold">Community</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Regular off-sites and a culture built on radical transparency and kindness.</p>
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-4xl font-serif font-bold">Open Positions</h2>
              <div className="divide-y divide-border">
                {[
                  { title: "Senior AI Researcher", team: "Editorial", type: "Full-time" },
                  { title: "Lead Product Designer", team: "Design", type: "Full-time" },
                  { title: "Technical Content Strategist", team: "Marketing", type: "Contract" },
                  { title: "Frontend Engineer (React)", team: "Engineering", type: "Full-time" }
                ].map((job, i) => (
                  <div key={i} className="py-8 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer">
                    <div>
                      <h4 className="text-2xl font-serif font-bold group-hover:text-accent transition-colors">{job.title}</h4>
                      <div className="flex gap-4 mt-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <span>{job.team}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <button className="mt-6 md:mt-0 px-8 py-3 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Link href="/" className="text-6xl font-serif font-bold tracking-tight">MSWOT.</Link>
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
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
