import { useState } from "react";
import { motion } from "framer-motion";
import AdminHeader from "../components/AdminHeader";
import { Link } from "wouter";
import { Edit2, Trash2, Plus } from "lucide-react";

export default function TagsListPage() {
  const [headerMenuItems, setHeaderMenuItems] = useState([
    { id: 1, label: "AI Tools", slug: "ai-tools", description: "Artificial Intelligence", posts: 45 },
    { id: 2, label: "Platforms", slug: "platforms", description: "Digital Platforms", posts: 32 },
    { id: 3, label: "SEO", slug: "seo", description: "Search Engine Optimization", posts: 28 },
    { id: 4, label: "Psychology", slug: "psychology", description: "Human behavior and cognition", posts: 19 },
  ]);

  const deleteItem = (id: number) => {
    setHeaderMenuItems(headerMenuItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-serif font-bold">Header Menu Items</h1>
            <Link href="/create-tags">
              <button className="flex items-center gap-2 px-6 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-all">
                <Plus className="w-4 h-4" />
                New Item
              </button>
            </Link>
          </div>

          {/* Header Menu Items List */}
          <div className="space-y-4">
            {headerMenuItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-border p-6 flex items-center justify-between"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{item.label}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  <p className="text-xs text-gray-400 mt-2">Slug: <code className="bg-gray-100 px-2 py-1 rounded">{item.slug}</code></p>
                </div>

                <div className="text-right mx-6">
                  <p className="text-2xl font-bold text-gray-800">{item.posts}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Posts</p>
                </div>

                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {headerMenuItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 font-medium mb-4">No header menu items yet</p>
              <Link href="/create-tags">
                <button className="px-6 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-all">
                  Create First Item
                </button>
              </Link>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
