import { useState, useEffect } from "react";
import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Twitter, Instagram, Linkedin, Search } from "lucide-react";
import blogCoffee from "../assets/blog-coffee.png";
import blogTech from "../assets/blog-tech.png";
import blogTravel from "../assets/blog-travel.png";

const NAV_LINKS = [
  { label: "AI Tools", href: "/category/ai-tools", submenu: ["SEO", "AI", "Automation", "Generative Tools"] },
  { label: "Platforms", href: "/category/platforms", submenu: ["Facebook", "Instagram", "Shopping", "Google Ads"] },
  { label: "SEO", href: "/category/seo", submenu: ["AEO", "AIO", "Content Marketing", "GEO"] },
  { label: "Psychology", href: "/category/psychology", submenu: ["B2B", "B2C", "Ecommerce"] },
  { label: "Branding", href: "/category/branding", submenu: ["B2B", "B2C"] },
  { label: "Updates", href: "/category/updates", submenu: ["Algorithms", "Content", "Media"] },
];

const ALL_POSTS = [
  { id: 1, title: "The Art of Slow Living in a Fast World", excerpt: "Deep dive into mindfulness.", category: ["Lifestyle", "Psychology"], image: blogCoffee, date: "Oct 12, 2023", readTime: "5 min" },
  { id: 2, title: "Essential Tools for the Modern Creative", excerpt: "Hardware and software for creators.", category: ["Work", "AI Tools"], image: blogTech, date: "Nov 05, 2023", readTime: "8 min" },
  { id: 3, title: "Finding Silence in the Nordic Forests", excerpt: "A visual journal of disconnection.", category: ["Travel", "Lifestyle"], image: blogTravel, date: "Dec 01, 2023", readTime: "12 min" },
  { id: 4, title: "Morning Rituals for Mental Clarity", excerpt: "How to start your day right.", category: ["Lifestyle"], image: blogCoffee, date: "Jan 15, 2024", readTime: "6 min" },
  { id: 5, title: "The Future of Remote Collaboration", excerpt: "Tech-driven teamwork.", category: ["Work", "AI Tools"], image: blogTech, date: "Feb 20, 2024", readTime: "7 min" },
  { id: 6, title: "A Weekend Guide to Kyoto", excerpt: "Cultural immersion in Japan.", category: ["Travel", "Branding"], image: blogTravel, date: "Mar 10, 2024", readTime: "10 min" },
  { id: 7, title: "Mastering SEO in 2026", excerpt: "The latest strategies.", category: ["SEO"], image: blogTech, date: "Apr 05, 2026", readTime: "15 min" },
  { id: 8, title: "Psychology of Color in Branding", excerpt: "Visual influence.", category: ["Branding", "Psychology"], image: blogCoffee, date: "May 12, 2026", readTime: "9 min" },
  { id: 9, title: "AI Automation for Businesses", excerpt: "Efficiency unlocked.", category: ["AI Tools"], image: blogTech, date: "Jun 15, 2026", readTime: "11 min" },
  { id: 10, title: "Digital Nomad Life in Bali", excerpt: "Paradise found.", category: ["Travel"], image: blogTravel, date: "Jul 20, 2026", readTime: "14 min" },
];

export default function CategoryPage() {
  const [, params] = useRoute("/category/:slug");
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
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <header className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-[0_3px_5px_0_rgba(0,0,0,.16),0_3px_5px_0_rgba(0,0,0,.23)]' : ''}`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-3xl font-serif font-bold tracking-tight">Editorial.</Link>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {NAV_LINKS.map(link => (
              <div key={link.label} className="relative group">
                <Link href={link.href} className="hover:text-accent transition-colors uppercase tracking-widest flex items-center gap-1">
                  {link.label}
                  <span className="text-[10px] opacity-50 group-hover:rotate-180 transition-transform duration-300">▼</span>
                </Link>
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white border border-border shadow-xl py-4 w-48 rounded-sm">
                    {link.submenu?.map((item) => (
                      <Link key={item} href={`/category/${item.toLowerCase().replace(' ', '-')}`} className="block px-6 py-2 text-xs font-medium text-black hover:bg-secondary hover:text-accent transition-colors">
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-serif font-bold mb-12 border-b pb-6 uppercase tracking-tight">{categoryLabel}</h1>

        {featuredPost && (
          <section className="mb-20">
            <Link href={`/blog/${featuredPost.id}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 group cursor-pointer bg-secondary/10 rounded-2xl overflow-hidden border border-border/50">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">Featured in {categoryLabel}</span>
                  <h2 className="text-4xl font-serif font-bold mb-6 group-hover:text-accent transition-colors leading-tight">{featuredPost.title}</h2>
                  <p className="text-gray-500 mb-8 line-clamp-3">{featuredPost.excerpt}</p>
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <article className="group bg-white border border-[#dadce0] rounded-[8px] overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-accent transition-colors h-[3.5rem] line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {visibleCount < otherPosts.length && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 9)}
              className="px-12 py-4 border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all rounded-sm"
            >
              Load More
            </button>
          </div>
        )}
      </main>

      <footer className="bg-black text-white pt-20 pb-12 mt-20">
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
                    <Link key={sub} href={`/category/${sub.toLowerCase().replace(' ', '-')}`} className="text-xs hover:text-white transition-colors uppercase tracking-[0.15em] font-medium">
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 px-4">
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
          <div className="border-t border-white/20 pt-10 mt-12 text-center opacity-30 text-[11px] uppercase tracking-[0.25em]">
            Powered by : MSWOT, 2026.
          </div>
        </div>
      </footer>
    </div>
  );
}
