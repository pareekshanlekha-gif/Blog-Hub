import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Instagram, Twitter, Linkedin, Search } from "lucide-react";
import heroAbstract from "../assets/hero-abstract.png";
import blogCoffee from "../assets/blog-coffee.png";
import blogTech from "../assets/blog-tech.png";
import blogTravel from "../assets/blog-travel.png";

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
    title: "The Art of Slow Living in a Fast World",
    excerpt: "Why taking a moment to breathe is the most productive thing you can do today.",
    category: "Lifestyle",
    image: blogCoffee,
    date: "October 12, 2023",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Essential Tools for the Modern Creative",
    excerpt: "A curated look at the hardware and software defining the new workspace.",
    category: "Work",
    image: blogTech,
    date: "November 05, 2023",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Finding Silence in the Nordic Forests",
    excerpt: "A visual journal of a week spent disconnecting in the wilderness.",
    category: "Travel",
    image: blogTravel,
    date: "December 01, 2023",
    readTime: "12 min read"
  },
  {
    id: 4,
    title: "Morning Rituals for Mental Clarity",
    excerpt: "How the first hour of your day determines the success of the next twelve.",
    category: "Lifestyle",
    image: blogCoffee,
    date: "January 15, 2024",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "The Future of Remote Collaboration",
    excerpt: "Breaking down the barriers of distance with new technology.",
    category: "Work",
    image: blogTech,
    date: "February 20, 2024",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "A Weekend Guide to Kyoto",
    excerpt: "Where to eat, sleep, and wander in Japan's cultural capital.",
    category: "Travel",
    image: blogTravel,
    date: "March 10, 2024",
    readTime: "10 min read"
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white font-sans">
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
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
          
          {/* Mobile Menu Icon would go here */}
        </div>
      </header>

      <main>
        {/* Highlight Section (Featured Post) */}
        <section className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-border/40">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1 w-full">
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

              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block mb-6 px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase rounded-full">
                    Featured
                  </span>
                  <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-[1.1] mb-6 hover:text-primary transition-colors cursor-pointer">
                    The Quiet Revolution of <br/> Simple Design
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                    Exploring how minimalism is reshaping not just our homes, but our digital landscapes and mental clarity in an age of constant noise.
                  </p>
                  <div className="flex items-center gap-4 text-sm font-medium mb-8">
                    <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Author" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="block text-foreground">Julian Casablancas</span>
                      <span className="text-muted-foreground text-xs">Feb 12, 2026 • 8 min read</span>
                    </div>
                  </div>
                  <a href="#" className="inline-flex items-center text-foreground hover:text-accent transition-all group" data-testid="hero-cta">
                    <ArrowRight className="w-8 h-8 transform group-hover:translate-x-2 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Featured Section (Grid) */}
        <section className="py-16 md:py-20 bg-secondary/20 border-b border-border/40">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {BLOG_POSTS.slice(0, 3).map((post, idx) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[16/9] overflow-hidden rounded-sm mb-6 bg-muted">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <span className="text-accent text-[10px] font-bold tracking-widest uppercase mb-3 block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-primary transition-colors cursor-pointer leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="text-[10px] text-muted-foreground/60 font-mono flex items-center gap-2">
                    {post.date} • {post.readTime}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <img 
                  src="https://blog.google/static/blogv2/images/newsletter-homepage-woman-couch.svg?version=pr20260203-1735" 
                  alt="Newsletter" 
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="flex-1 text-left">
                <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                  Get the latest news from MSwot in your inbox.
                </h2>
                <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 px-6 py-4 bg-white text-black border-none rounded-l-sm focus:outline-none"
                    required
                    data-testid="newsletter-input"
                  />
                  <button 
                    type="submit" 
                    className="px-8 py-4 bg-accent text-white font-bold hover:bg-accent/90 transition-colors rounded-r-sm whitespace-nowrap"
                    data-testid="newsletter-submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Latest Stories</h2>
                <p className="text-muted-foreground">Curated insights for the modern aesthetic.</p>
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
                        : "bg-transparent hover:bg-white/50 text-muted-foreground hover:text-foreground"
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
                <article key={post.id} className="group cursor-pointer" data-testid={`blog-card-${post.id}`}>
                  <div className="aspect-[4/3] overflow-hidden mb-6 rounded-sm bg-muted">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider mb-3">
                    <span className="text-accent">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-border"></span>
                    <span className="text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif leading-tight mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="text-xs text-muted-foreground/60 font-mono">
                    {post.date}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          {/* Layer 1: Company Name */}
          <div className="text-center mb-12">
            <Link href="/" className="text-4xl font-serif font-bold tracking-tight">
              MSWOT.
            </Link>
          </div>

          <div className="border-t border-white/20 my-12"></div>

          {/* Layer 2: Topics Menu */}
          <div className="mb-12">
            <h4 className="text-center text-xs font-bold uppercase tracking-[0.3em] mb-10 opacity-50">Topics</h4>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
              {NAV_LINKS.map(link => (
                <div key={link.label} className="text-center">
                  <a href={link.href} className="text-sm font-bold hover:text-accent transition-colors block mb-3">
                    {link.label}
                  </a>
                  <div className="flex flex-wrap justify-center gap-x-4 opacity-60">
                    {link.submenu?.map(sub => (
                      <a key={sub} href="#" className="text-[10px] hover:text-white transition-colors">{sub}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/20 my-12"></div>

          {/* Layer 3: Company Horizontal & Socials */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center gap-8 text-xs font-medium opacity-70">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 2nd Footer */}
      <div className="bg-black text-white border-t border-white py-6 text-center">
        <p className="text-sm font-medium opacity-50">Powered by : MSWOT, 2026.</p>
      </div>
    </div>
  );
}
