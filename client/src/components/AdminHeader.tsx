import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { LogOut, User, ChevronDown, Menu, X } from "lucide-react";
import logoImg from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleLogout = () => {
    // Handle logout logic here
    setLocation("/login");
  };

  // Close mobile menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Create Post", href: "/create-post" },
    { label: "My Posts", href: "/posts-list" },
    { label: "Categories", href: "/categories" },
    { label: "Tags", href: "/tags-list" },
    { label: "Users", href: "/users-list" },
    { label: "Subscribers", href: "/subscribers-list" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-2 -ml-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <Link href="/dashboard" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logoImg} alt="MSWOT Logo" className="h-10 w-auto object-contain" />
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="text-sm font-medium hidden md:inline-block">My Account</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg py-2 z-50">
                <Link href="/my-account" className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
                  Edit Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-white z-[70] shadow-xl flex flex-col md:hidden"
            >
              <div className="h-20 flex items-center justify-between px-6 border-b border-border/40">
                <img src={logoImg} alt="MSWOT Logo" className="h-8 w-auto object-contain" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6">
                <div className="px-4 space-y-1">
                  <p className="px-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Admin Menu</p>
                  {menuItems.map((item) => (
                    <Link key={item.label} href={item.href}>
                      <span 
                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                          location === item.href 
                            ? "bg-black text-white" 
                            : "text-gray-700 hover:text-black hover:bg-gray-100"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
