import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center selection:bg-black selection:text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl space-y-8"
      >
        <div className="relative inline-block">
          <h1 className="text-[200px] font-serif font-black leading-none text-black opacity-5">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Lost in thought.</h2>
          </div>
        </div>
        
        <p className="text-xl text-gray-500 font-light leading-relaxed">
          The page you're looking for seems to have drifted away. <br className="hidden md:block" /> 
          Perhaps it's being rewritten, or never existed in this dimension.
        </p>

        <div className="pt-8">
          <Link href="/" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-accent transition-all rounded-sm group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </motion.div>
      
      <div className="fixed bottom-12 left-12 opacity-10 font-serif text-8xl font-black italic pointer-events-none select-none">
        Editorial.
      </div>
    </div>
  );
}
