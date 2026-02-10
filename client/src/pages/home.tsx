import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Instagram, Twitter, Linkedin, Search } from "lucide-react";
import heroAbstract from "../assets/hero-abstract.png";
import blogCoffee from "../assets/blog-coffee.png";
import blogTech from "../assets/blog-tech.png";
import blogTravel from "../assets/blog-travel.png";
import newsletterAlt from "../assets/newsletter-alt.png";

const NAV_LINKS = [
  { label: "AI Tools", href: "#", submenu: ["SEO", "AI", "Automation", "Generative Tools"] },
  { label: "Platforms", href: "#", submenu: ["Facebook", "Instagram", "Shopping", "Google Ads"] },
  { label: "SEO", href: "#", submenu: ["AEO", "AIO", "Content Marketing", "GEO"] },
  { label: "Psychology", href: "#", submenu: ["B2B", "B2C", "Ecommerce"] },
  { label: "Branding", href: "#", submenu: ["B2B", "B2C"] },
  { label: "Updates", href: "#", submenu: ["Algorithms", "Content", "Media"] },
];

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Art of Slow Living in a Fast World: A Guide to Modern Mindfulness",
    excerpt: "Why taking a moment to breathe is the most productive thing you can do today in our hyper-connected society. We explore the deep psychological impacts of constant notifications and the beauty of analog moments.",
    category: ["Lifestyle", "Psychology"],
    image: blogCoffee,
    date: "October 12, 2023",
    readTime: "5 min read",
    bigTitle: true
  },
  {
    id: 2,
    title: "Essential Tools for the Modern Creative Workspace",
    excerpt: "A curated look at the hardware and software defining the new workspace for freelancers and digital nomads alike.",
    category: ["Work", "AI Tools"],
    image: blogTech,
    date: "November 05, 2023",
    readTime: "8 min read",
    bigTitle: false
  },
  {
    id: 3,
    title: "Finding Silence in the Nordic Forests: A Visual Journal",
    excerpt: "A visual journal of a week spent disconnecting in the wilderness of Norway, where silence is the primary language.",
    category: ["Travel", "Lifestyle"],
    image: blogTravel,
    date: "December 01, 2023",
    readTime: "12 min read",
    bigTitle: true
  },
  {
    id: 4,
    title: "Morning Rituals for Mental Clarity",
    excerpt: "How the first hour of your day determines the success of the next twelve hours of work and life.",
    category: ["Lifestyle"],
    image: blogCoffee,
    date: "January 15, 2024",
    readTime: "6 min read",
    bigTitle: false
  },
  {
    id: 5,
    title: "The Future of Remote Collaboration and AI",
    excerpt: "Breaking down the barriers of distance with new technology and generative AI tools that empower teams.",
    category: ["Work", "AI Tools"],
    image: blogTech,
    date: "February 20, 2024",
    readTime: "7 min read",
    bigTitle: false
  },
  {
    id: 6,
    title: "A Weekend Guide to Kyoto: Cultural Immersion",
    excerpt: "Where to eat, sleep, and wander in Japan's cultural capital, focusing on the blend of tradition and modern branding.",
    category: ["Travel", "Branding"],
    image: blogTravel,
    date: "March 10, 2024",
    readTime: "10 min read",
    bigTitle: true
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category.includes(activeCategory));

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white font-sans">
      
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-[0_3px_5px_0_rgba(0,0,0,.16),0_3px_5px_0_rgba(0,0,0,.23)]' : ''}`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-3xl font-serif font-bold tracking-tight hover:opacity-80 transition-opacity" data-testid="logo">
            Editorial.
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative group">
                  <a 
                    href={link.href} 
                    className="text-sm font-medium tracking-wide hover:text-accent transition-colors flex items-center gap-1"
                    data-testid={`nav-link-${link.label}`}
                  >
                    {link.label}
                    <span className="text-[10px] opacity-50 group-hover:rotate-180 transition-transform duration-300">▼</span>
                  </a>
                  {/* Submenu */}
                  <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white border border-border shadow-xl py-4 w-48 rounded-sm">
                      {link.submenu?.map((item) => (
                        <a key={item} href="#" className="block px-6 py-2 text-xs font-medium hover:bg-secondary hover:text-accent transition-colors">
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="h-4 w-px bg-border mx-2"></div>
            
            <button className="p-2 hover:bg-secondary rounded-full transition-colors" data-testid="search-button">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Highlight Section (Featured Post) */}
        <section className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-border/40">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 w-full order-1">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="aspect-[16/10] overflow-hidden rounded-sm shadow-2xl relative group"
                >
                  <img 
                    src={heroAbstract} 
                    alt="Featured Story" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </div>

              <div className="flex-1 order-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-[40px] font-serif font-semibold leading-[1.1] mb-6 hover:text-primary transition-colors cursor-pointer">
                    The Quiet Revolution of Simple Design: How Minimalism is Reshaping Our Future
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                    Exploring how minimalism is reshaping not just our homes, but our digital landscapes, mental clarity, and productivity in an age of constant noise and digital fatigue. Discover the principles that allow for a more focused and intentional life.
                  </p>
                  <div className="flex items-center justify-between gap-4 text-sm font-medium">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Author" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="block text-foreground font-bold uppercase tracking-tight">Julian Casablancas</span>
                        <span className="text-muted-foreground text-xs uppercase tracking-widest">Feb 12, 2026 • 8 min read</span>
                      </div>
                    </div>
                    <a href="#" className="text-foreground hover:text-accent transition-all group" data-testid="hero-cta">
                      <ArrowRight className="w-8 h-8 transform group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Featured Section (Main Category Headline) */}
        <section className="py-16 md:py-20 bg-secondary/20 border-b border-border/40">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-serif mb-12 text-center">Main Category Headline</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {BLOG_POSTS.slice(0, 3).map((post, idx) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white border border-[#dadce0] rounded-[8px] overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.category.map(cat => (
                        <span key={cat} className="text-accent text-[10px] font-bold tracking-widest uppercase">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-primary transition-colors cursor-pointer leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="text-[10px] text-muted-foreground/60 font-mono flex items-center gap-2">
                      {post.date} • {post.readTime}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden border-b border-border/40">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <img 
                  src={newsletterAlt} 
                  alt="Newsletter" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="flex-1 text-left">
                <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                  Get the latest news from MSwot in your inbox.
                </h2>
                <form className="flex w-full max-w-md shadow-2xl rounded-sm overflow-hidden" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 px-6 py-4 bg-white text-black border-none focus:outline-none"
                    required
                    data-testid="newsletter-input"
                  />
                  <button 
                    type="submit" 
                    className="px-8 py-4 bg-accent text-white font-bold hover:bg-accent/90 transition-colors whitespace-nowrap"
                    data-testid="newsletter-submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section (Latest Stories) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif">Latest Stories</h2>
              </div>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {["All", "Lifestyle", "Work", "Travel"].map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                      activeCategory === category 
                        ? "bg-foreground text-background font-medium" 
                        : "bg-transparent hover:bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                    data-testid={`filter-${category}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <article className="group bg-white border border-[#dadce0] rounded-[8px] overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer h-full" data-testid={`blog-card-${post.id}`}>
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.category.map(cat => (
                          <span key={cat} className="text-accent text-[10px] font-bold tracking-widest uppercase">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif leading-tight mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="text-xs text-muted-foreground/60 font-mono">
                        {post.date} • {post.readTime}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
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

          {/* Layer 2: Topics Menu */}
          <div className="mb-16 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8">
              {NAV_LINKS.map(link => (
                <div key={link.label} className="text-left">
                  <a href={link.href} className="text-xl font-bold hover:text-accent transition-colors block mb-6">
                    {link.label}
                  </a>
                  <div className="flex flex-col items-start gap-y-3 opacity-50">
                    {link.submenu?.map(sub => (
                      <a key={sub} href="#" className="text-xs hover:text-white transition-colors uppercase tracking-[0.15em] font-medium">{sub}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Layer 3: Company Horizontal & Socials */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 px-4">
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
        </div>
      </footer>

      {/* 2nd Footer */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-10">
          <div className="border-t border-white/20 pt-10 text-center">
            <p className="text-[11px] font-bold tracking-[0.25em] opacity-30 uppercase">Powered by : MSWOT, 2026.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
