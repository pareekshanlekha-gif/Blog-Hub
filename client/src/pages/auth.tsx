import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import logoImg from "../assets/logo.png";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mockup, so we just redirect to home
    setLocation("/");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white selection:bg-black selection:text-white">
      {/* Visual Side */}
      <div className="hidden md:flex md:w-1/2 bg-black text-white p-20 flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img src={logoImg} alt="MSWOT Logo" className="h-10 w-auto object-contain brightness-0 invert" />
          </Link>
        </div>
        
        <div className="relative z-10 space-y-6">
          <h2 className="text-6xl font-serif font-bold leading-tight">
            The heart of <br/> knowledge.
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-md">
            Join 50,000+ readers getting daily insights on AI, Design, and Digital Culture.
          </p>
        </div>

        <div className="relative z-10 flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          <span>© 2026 MSWOT</span>
          <span>Privacy First</span>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] rounded-full border border-white/20 blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[80%] h-[80%] rounded-full border border-white/20 blur-3xl"></div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-24 bg-white">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-serif font-bold text-black">
              {isLogin ? "Welcome Back." : "Create Account."}
            </h1>
            <p className="text-gray-500">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-black font-bold border-b border-black pb-0.5 hover:text-accent hover:border-accent transition-colors"
              >
                {isLogin ? "Sign up for free" : "Log in to your account"}
              </button>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe" 
                  className="w-full px-0 py-4 bg-transparent border-b border-border focus:border-black focus:outline-none transition-colors" 
                />
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="hello@example.com" 
                className="w-full px-0 py-4 bg-transparent border-b border-border focus:border-black focus:outline-none transition-colors" 
              />
            </div>

            <div className="space-y-2 relative">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                required
                placeholder="••••••••" 
                className="w-full px-0 py-4 bg-transparent border-b border-border focus:border-black focus:outline-none transition-colors" 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 bottom-4 text-gray-400 hover:text-black transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button type="button" className="text-xs text-gray-400 hover:text-black transition-colors">
                  Forgot password?
                </button>
              </div>
            )}

            <button 
              type="submit"
              className="w-full flex items-center justify-between px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-accent transition-all rounded-sm group"
            >
              {isLogin ? "Log In" : "Get Started"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold">
              <span className="bg-white px-4 text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="py-4 border border-border rounded-sm hover:border-black transition-colors font-bold text-xs uppercase tracking-widest">Google</button>
            <button className="py-4 border border-border rounded-sm hover:border-black transition-colors font-bold text-xs uppercase tracking-widest">Twitter</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
