import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Twitter, Instagram, Linkedin, Share2, Bookmark, Cpu, Zap, MessageSquare, Search } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "AI Tools", href: "/ai-tools", submenu: ["SEO", "AI", "Automation", "Generative Tools"] },
  { label: "Platforms", href: "/platforms", submenu: ["Facebook", "Instagram", "Shopping", "Google Ads"] },
  { label: "SEO", href: "/seo", submenu: ["AEO", "AIO", "Content Marketing", "GEO"] },
  { label: "Psychology", href: "/psychology", submenu: ["B2B", "B2C", "Ecommerce"] },
  { label: "Branding", href: "/branding", submenu: ["B2B", "B2C"] },
  { label: "Updates", href: "/updates", submenu: ["Algorithms", "Content", "Media"] },
];

const BLOG_CONTENT = {
  title: "The Art of Slow Living in a Fast World: A Guide to Modern Mindfulness",
  author: {
    name: "Julian Casablancas",
    role: "Senior Editorial Director",
    bio: "Julian is a design researcher and philosopher exploring the intersection of minimalism, technology, and human experience. With over 15 years in digital ethics.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  },
  date: "Feb 12, 2026",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000",
  toc: [
    { id: "intro", label: "Introduction" },
    { id: "digital-fatigue", label: "The Digital Fatigue" },
    { id: "minimalist-principles", label: "Minimalist Principles" },
    { id: "analog-revival", label: "The Analog Revival" },
    { id: "conclusion", label: "A Path Forward" }
  ]
};

export default function BlogDetails() {
  const [, params] = useRoute("/blog/:id");
  const [activeId, setActiveId] = useState("intro");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = document.querySelectorAll("section[id]");
      let current = "intro";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.id;
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-[0_3px_5px_0_rgba(0,0,0,.16),0_3px_5px_0_rgba(0,0,0,.23)]' : ''}`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-3xl font-serif font-bold tracking-tight hover:opacity-80 transition-opacity">
            Editorial.
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative group">
                  <Link href={link.href} className="text-sm font-medium tracking-wide hover:text-accent transition-colors flex items-center gap-1">
                    {link.label}
                    <span className="text-[10px] opacity-50 group-hover:rotate-180 transition-transform duration-300">▼</span>
                  </Link>
                  <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
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

      <main className="container mx-auto px-6 py-12">
        {/* Article Header */}
        <header className="max-w-4xl mx-auto mb-16 text-center">
          <div className="flex justify-center gap-2 mb-6">
            <span className="text-[10px] font-bold tracking-widest uppercase text-accent border border-accent/20 px-2 py-1 rounded">Psychology</span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 border border-gray-100 px-2 py-1 rounded">Lifestyle</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
            {BLOG_CONTENT.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>By {BLOG_CONTENT.author.name}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{BLOG_CONTENT.date}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{BLOG_CONTENT.readTime}</span>
          </div>
        </header>

        <div className="aspect-[21/9] w-full mb-20 overflow-hidden rounded-xl">
          <img src={BLOG_CONTENT.image} alt="Cover" className="w-full h-full object-cover" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
          
          {/* Left: AI Summarizers & Table of Contents */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <a 
                  href={`https://chatgpt.com/?q=Summarize%20${encodeURIComponent(window.location.href)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all transform hover:scale-110 group relative"
                  title="Summarize with ChatGPT"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
                <a 
                  href={`https://grok.com/?q=Summarize%20${encodeURIComponent(window.location.href)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-black hover:bg-black hover:text-white transition-all transform hover:scale-110 group relative"
                  title="Summarize with Grok AI"
                >
                  <Cpu className="w-5 h-5" />
                </a>
                <a 
                  href={`https://claude.ai/new?q=Summarize%20${encodeURIComponent(window.location.href)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition-all transform hover:scale-110 group relative"
                  title="Summarize with Claude"
                >
                  <Zap className="w-5 h-5" />
                </a>
              </div>
            </div>

            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Table of Contents</h4>
            <nav className="flex flex-col gap-4 border-l border-gray-100">
              {BLOG_CONTENT.toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`pl-6 text-sm transition-all duration-300 relative ${
                    activeId === item.id 
                      ? "text-black font-bold border-l-2 border-black -ml-[1px]" 
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Center: Content */}
          <article className="lg:col-span-6 max-w-none">
            <section id="intro" className="mb-16">
              <p className="text-xl leading-relaxed text-gray-600 mb-8 font-serif italic">
                "The world is moving faster than ever, yet we seem to be getting nowhere. We are connected, yet lonely. We are productive, yet unfulfilled."
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                In an era defined by rapid technological advancement and perpetual connectivity, the concept of "slow living" has emerged not as a trend, but as a necessary survival mechanism. Minimalism is no longer just about the objects we own, but about the space we allow our minds to inhabit.
              </p>
            </section>

            <section id="digital-fatigue" className="mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">The Digital Fatigue</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Every notification is a micro-transaction of our attention. Over time, these small costs accumulate into a state of chronic digital fatigue. We explore how constant connectivity alters our brain's chemistry, reducing our capacity for deep focus and meaningful reflection.
              </p>
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" className="rounded-lg my-10 shadow-lg" alt="Digital Fatigue" />
            </section>

            <section id="minimalist-principles" className="mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">Minimalist Principles</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Minimalism in the digital age isn't about deleting all your apps. It's about intentionality. We break down the three core principles of digital minimalism:
              </p>
              <ul className="space-y-4 my-8 text-lg text-gray-700 list-disc pl-6">
                <li><strong>Subtraction:</strong> Removing what doesn't add value.</li>
                <li><strong>Silence:</strong> Creating blocks of time without external input.</li>
                <li><strong>Single-tasking:</strong> Returning to the power of undivided attention.</li>
              </ul>
            </section>

            <section id="analog-revival" className="mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">The Analog Revival</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Why are vinyl sales at an all-time high? Why do we still crave the tactile feel of a physical book? The analog revival is a rebellion against the intangible nature of digital life. It's a search for weight, texture, and permanence.
              </p>
            </section>

            <section id="conclusion" className="mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">A Path Forward</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                The goal isn't to retreat into the past, but to carry the wisdom of the past into the future. By embracing the slow, we find the depth that the fast world lacks.
              </p>
            </section>
          </article>

          {/* Right: Author & Metadata */}
          <aside className="lg:col-span-3">
            <div className="sticky top-32 space-y-12">
              <div className="p-8 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-6">
                  <img src={BLOG_CONTENT.author.avatar} alt={BLOG_CONTENT.author.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-bold mb-4">{BLOG_CONTENT.author.name}</p>
                <p className="text-xs leading-relaxed text-gray-500 mb-6">
                  {BLOG_CONTENT.author.bio}
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-black transition-colors"><Twitter className="w-4 h-4" /></a>
                  <a href="#" className="text-gray-400 hover:text-black transition-colors"><Instagram className="w-4 h-4" /></a>
                  <a href="#" className="text-gray-400 hover:text-black transition-colors"><Linkedin className="w-4 h-4" /></a>
                </div>
              </div>

              <div className="px-4">
                <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Share this story</h4>
                <div className="flex flex-col gap-4">
                  <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors">
                    <Twitter className="w-3 h-3" /> Twitter
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 border border-gray-100 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors">
                    <Linkedin className="w-3 h-3" /> LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Layer 1: Company Name */}
          <div className="text-center mb-16">
            <Link href="/" className="text-6xl font-serif font-bold tracking-tight">
              MSWOT.
            </Link>
          </div>

          {/* Layer 2: Menus */}
          <div className="mb-16 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8">
              {NAV_LINKS.map(link => (
                <div key={link.label} className="text-left">
                  <Link href={link.href} className="text-xl font-bold hover:text-accent transition-colors block mb-6">
                    {link.label}
                  </Link>
                  <div className="flex flex-col items-start gap-y-3 opacity-50">
                    {link.submenu?.map(sub => (
                      <Link key={sub} href={`/${sub.toLowerCase().replace(' ', '-')}`} className="text-xs hover:text-white transition-colors uppercase tracking-[0.15em] font-medium">
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Layer 3: Company Horizontal & Socials */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 px-4 border-t border-white/10">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6 text-sm font-semibold tracking-wide uppercase opacity-60">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
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
