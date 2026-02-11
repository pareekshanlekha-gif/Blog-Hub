import { useState, useEffect } from "react";
import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Twitter, Instagram, Linkedin, Search } from "lucide-react";
import blogCoffee from "../assets/blog-coffee.png";
import blogTech from "../assets/blog-tech.png";
import blogTravel from "../assets/blog-travel.png";

const NAV_LINKS = [
  { label: "AI Tools", href: "/ai-tools", submenu: ["SEO", "AI", "Automation", "Generative Tools"] },
  { label: "Platforms", href: "/platforms", submenu: ["Facebook", "Instagram", "Shopping", "Google Ads"] },
  { label: "SEO", href: "/seo", submenu: ["AEO", "AIO", "Content Marketing", "GEO"] },
  { label: "Psychology", href: "/psychology", submenu: ["B2B", "B2C", "Ecommerce"] },
  { label: "Branding", href: "/branding", submenu: ["B2B", "B2C"] },
  { label: "Updates", href: "/updates", submenu: ["Algorithms", "Content", "Media"] },
];

const ALL_POSTS = [
  { 
    id: 1, 
    title: "The Art of Slow Living in a Fast World", 
    excerpt: "Deep dive into mindfulness. Exploring how the pace of modern life affects our mental well-being and what steps we can take to reclaim our time and peace in a world that never stops.", 
    category: ["Lifestyle", "Psychology"], 
    image: blogCoffee, 
    date: "Oct 12, 2023", 
    readTime: "5 min",
    author: { name: "Julian Casablancas", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" }
  },
  { 
    id: 2, 
    title: "Essential Tools for the Modern Creative", 
    excerpt: "Hardware and software for creators. From high-end cameras to AI-driven editing suites, discover the tools that are empowering the next generation of visual storytellers and digital artists.", 
    category: ["Work", "AI Tools"], 
    image: blogTech, 
    date: "Nov 05, 2023", 
    readTime: "8 min",
    author: { name: " Julian Casablancas", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" }
  },
  { 
    id: 3, 
    title: "Finding Silence in the Nordic Forests", 
    excerpt: "A visual journal of disconnection. Join us on a journey through the untouched wilderness of Scandinavia, where the only sound is the wind in the pines and the crackle of a campfire.", 
    category: ["Travel", "Lifestyle"], 
    image: blogTravel, 
    date: "Dec 01, 2023", 
    readTime: "12 min",
    author: { name: "Julian Casablancas", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" }
  },
  { 
    id: 4, 
    title: "Morning Rituals for Mental Clarity", 
    excerpt: "How to start your day right. Your first hour determines the next twelve. Learn how successful designers and writers structure their mornings for maximum creative output and emotional stability.", 
    category: ["Lifestyle"], 
    image: blogCoffee, 
    date: "Jan 15, 2024", 
    readTime: "6 min",
    author: { name: "Julian Casablancas", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" }
  },
  { 
    id: 5, 
    title: "The Future of Remote Collaboration", 
    excerpt: "Tech-driven teamwork. As the world shifts towards distributed work, new platforms are emerging to bridge the physical gap, enabling teams to co-create in real-time regardless of their location.", 
    category: ["Work", "AI Tools"], 
    image: blogTech, 
    date: "Feb 20, 2024", 
    readTime: "7 min",
    author: { name: "Julian Casablancas", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" }
  },
  { 
    id: 6, 
    title: "A Weekend Guide to Kyoto", 
    excerpt: "Cultural immersion in Japan. Beyond the temples and tea houses, Kyoto offers a unique blend of ancient tradition and cutting-edge design. Here is your curated guide to the city's hidden gems.", 
    category: ["Travel", "Branding"], 
    image: blogTravel, 
    date: "Mar 10, 2024", 
    readTime: "10 min",
    author: { name: "Julian Casablancas", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" }
  },
  { 
    id: 7, 
    title: "Mastering SEO in 2026", 
    excerpt: "The latest strategies for a search landscape dominated by AI. Learn how to optimize for user intent and conversational queries rather than just keywords and backlinks.", 
    category: ["SEO"], 
    image: blogTech, 
    date: "Apr 05, 2026", 
    readTime: "15 min",
    author: { name: "Julian Casablancas", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" }
  },
  { 
    id: 8, 
    title: "Psychology of Color in Branding", 
    excerpt: "Visual influence. Every shade tells a story and triggers a subconscious emotional response. We break down the science of color and how to use it to build trust and authority.", 
    category: ["Branding", "Psychology"], 
    image: blogCoffee, 
    date: "May 12, 2026", 
    readTime: "9 min",
    author: { name: "Julian Casablancas", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" }
  },
  { 
    id: 9, 
    title: "AI Automation for Businesses", 
    excerpt: "Efficiency unlocked. From customer support to data analysis, discover how integrating AI into your workflow can save thousands of hours and reveal insights previously hidden in the noise.", 
    category: ["AI Tools"], 
    image: blogTech, 
    date: "Jun 15, 2026", 
    readTime: "11 min",
    author: { name: "Julian Casablancas", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" }
  },
  { 
    id: 10, 
    title: "Digital Nomad Life in Bali", 
    excerpt: "Paradise found. Exploring the co-working spaces and community that make Bali the ultimate destination for digital professionals seeking a balance between high-level work and island living.", 
    category: ["Travel"], 
    image: blogTravel, 
    date: "Jul 20, 2026", 
    readTime: "14 min",
    author: { name: "Julian Casablancas", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" }
  },
];

export default function CategoryPage() {
  const [, params] = useRoute("/:slug");
  const slug = params?.slug || "all";
  const [visibleCount, setVisibleCount] = useState(9);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categoryLabel = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const categoryPosts = slug === "all" ? ALL_POSTS : ALL_POSTS.filter(p => p.category.some(c => c.toLowerCase().replace(' ', '-') === slug));
  
  const featuredPost = categoryPosts[0];
  const otherPosts = categoryPosts.slice(1);
  const displayedPosts = otherPosts.slice(0, visibleCount);

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
            <div className="h-4 w-px bg-border mx-2"></div>
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-serif font-bold mb-16 border-b pb-10 uppercase tracking-tight text-black">{categoryLabel}</h1>

          {featuredPost && (
            <section className="mb-24">
              <Link href={`/blog/${featuredPost.id}`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 group cursor-pointer bg-white border border-[#dadce0] rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="lg:col-span-7 aspect-[16/10] overflow-hidden">
                    <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  </div>
                  <div className="lg:col-span-5 flex flex-col justify-center p-10 lg:p-16 bg-white">
                    <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Featured in {categoryLabel}</span>
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-8 group-hover:text-primary transition-colors leading-[1.1] text-black">{featuredPost.title}</h2>
                    <p className="text-gray-500 text-lg mb-10 leading-relaxed line-clamp-4">{featuredPost.excerpt}</p>
                    
                    <div className="flex items-center justify-between mt-auto border-t pt-8 border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-sm">
                          <p className="font-bold uppercase tracking-tight text-black">{featuredPost.author.name}</p>
                          <p className="text-gray-400 text-xs uppercase tracking-widest">{featuredPost.date} • {featuredPost.readTime} read</p>
                        </div>
                      </div>
                      <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-transform text-black" />
                    </div>
                  </div>
                </div>
              </Link>
            </section>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {displayedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article className="group bg-white border border-[#dadce0] rounded-[12px] overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer flex flex-col h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.category.map(cat => (
                        <span key={cat} className="text-accent text-[9px] font-bold tracking-[0.2em] uppercase">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors leading-tight text-black line-clamp-2">{post.title}</h3>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-50">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-[10px]">
                        <p className="font-bold uppercase tracking-widest text-black">{post.author.name}</p>
                        <p className="text-gray-400 uppercase tracking-widest">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {visibleCount < otherPosts.length && (
            <div className="mt-24 text-center">
              <button 
                onClick={() => setVisibleCount(prev => prev + 9)}
                className="px-16 py-5 border-2 border-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-black hover:text-white transition-all rounded-sm shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                Load More Stories
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-black text-white pt-24 pb-16 mt-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <Link href="/" className="text-6xl font-serif font-bold tracking-tight hover:opacity-80 transition-opacity">MSWOT.</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8 mb-20 px-4">
            {NAV_LINKS.map(link => (
              <div key={link.label} className="text-left">
                <Link href={link.href} className="text-xl font-bold hover:text-accent transition-colors mb-8 block">{link.label}</Link>
                <div className="flex flex-col items-start gap-y-4 opacity-50">
                  {link.submenu.map(sub => (
                    <Link key={sub} href={`/${sub.toLowerCase().replace(' ', '-')}`} className="text-xs hover:text-white transition-colors uppercase tracking-[0.15em] font-medium">
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 px-4 border-t border-white/10">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6 text-sm font-semibold tracking-wide uppercase opacity-60">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-12 mt-16 text-center opacity-30 text-[11px] uppercase tracking-[0.25em]">
            Powered by : MSWOT, 2026.
          </div>
        </div>
      </footer>
    </div>
  );
}
