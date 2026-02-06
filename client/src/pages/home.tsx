import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Instagram, Twitter, Linkedin, Search } from "lucide-react";
import heroAbstract from "../assets/hero-abstract.png";
import blogCoffee from "../assets/blog-coffee.png";
import blogTech from "../assets/blog-tech.png";
import blogTravel from "../assets/blog-travel.png";

const NAV_LINKS = [
  { label: "Culture", href: "#" },
  { label: "Travel", href: "#" },
  { label: "Work", href: "#" },
  { label: "Style", href: "#" },
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
                      <a href="#" className="block px-6 py-2 text-xs font-medium hover:bg-secondary hover:text-accent transition-colors">Latest Stories</a>
                      <a href="#" className="block px-6 py-2 text-xs font-medium hover:bg-secondary hover:text-accent transition-colors">Editor's Choice</a>
                      <a href="#" className="block px-6 py-2 text-xs font-medium hover:bg-secondary hover:text-accent transition-colors">Archives</a>
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
              <div className="flex-1 order-2 md:order-1">
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
                  <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background text-sm font-bold hover:bg-primary hover:text-white transition-all rounded-sm group" data-testid="hero-cta">
                    Read Story
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
              
              <div className="flex-1 order-1 md:order-2 w-full">
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

        {/* Newsletter Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="inline-block mb-6 text-xs font-bold tracking-[0.2em] uppercase opacity-70">
              The Weekly Digest
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-3xl mx-auto leading-tight">
              Stories worth reading, delivered to your inbox.
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto font-light">
              Join 15,000+ readers. No spam, just high-quality essays on design, culture, and slow living.
            </p>

            <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-6 py-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary-foreground/50 transition-all"
                required
                data-testid="newsletter-input"
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-accent text-white font-medium hover:bg-accent/90 transition-colors rounded-sm shadow-lg hover:shadow-xl"
                data-testid="newsletter-submit"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-accent rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <Link href="/" className="text-2xl font-serif font-bold tracking-tight block mb-6">
                Editorial.
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                A digital publication dedicated to the art of mindful living and creative work.
              </p>
            </div>
            
            <div className="md:col-span-1">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {NAV_LINKS.map(link => (
                  <li key={link.label}><a href={link.href} className="hover:text-foreground transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-1">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-all group">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-all group">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-all group">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2024 Editorial Publishing. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground">Terms</a>
              <a href="#" className="hover:text-foreground">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
