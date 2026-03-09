import { useState } from "react";
import { motion } from "framer-motion";
import AdminHeader from "../components/AdminHeader";
import { Link } from "wouter";
import { Edit2, Trash2, Plus } from "lucide-react";

export default function TagsListPage() {
  const [tags, setTags] = useState([
    { id: 1, name: "AI", description: "Artificial Intelligence", posts: 45 },
    { id: 2, name: "Web Design", description: "Design for web", posts: 32 },
    { id: 3, name: "SEO", description: "Search Engine Optimization", posts: 28 },
    { id: 4, name: "Psychology", description: "Human behavior and cognition", posts: 19 },
    { id: 5, name: "Branding", description: "Brand and identity design", posts: 24 },
  ]);

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
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
            <h1 className="text-4xl font-serif font-bold">Tags</h1>
            <Link href="/create-tags">
              <button className="flex items-center gap-2 px-6 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-all">
                <Plus className="w-4 h-4" />
                New Tag
              </button>
            </Link>
          </div>

          {/* Tags Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tags.map((tag, idx) => (
              <motion.div
                key={tag.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-border p-6 space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{tag.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{tag.description}</p>
                  </div>
                </div>

                <div className="py-3 border-t border-border">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    Used in {tag.posts} posts
                  </p>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 text-blue-600 font-bold uppercase tracking-widest text-xs border border-blue-200 rounded hover:bg-blue-50 transition-all">
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTag(tag.id)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 text-red-600 font-bold uppercase tracking-widest text-xs border border-red-200 rounded hover:bg-red-50 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
