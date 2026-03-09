import { useState } from "react";
import { motion } from "framer-motion";
import AdminHeader from "../components/AdminHeader";

export default function CreateTagsPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    color: "#000000",
  });

  const [tags, setTags] = useState([
    { id: 1, name: "AI", description: "Artificial Intelligence", color: "#3B82F6" },
    { id: 2, name: "Web Design", description: "Design for web", color: "#EF4444" },
    { id: 3, name: "SEO", description: "Search Engine Optimization", color: "#10B981" },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim()) {
      setTags([...tags, {
        id: tags.length + 1,
        name: formData.name,
        description: formData.description,
        color: formData.color,
      }]);
      setFormData({ name: "", description: "", color: "#000000" });
    }
  };

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
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-serif font-bold mb-12">Manage Tags</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Create Tag Form */}
            <div className="lg:col-span-1">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-border p-6 space-y-6">
                <h2 className="text-xl font-serif font-bold">Create New Tag</h2>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Tag Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Technology"
                    className="w-full px-4 py-3 mt-2 bg-white border border-border rounded focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tag description"
                    rows={3}
                    className="w-full px-4 py-3 mt-2 bg-white border border-border rounded focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Tag Color</label>
                  <input
                    type="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="w-full h-12 mt-2 border border-border rounded cursor-pointer"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-all"
                >
                  Create Tag
                </button>
              </form>
            </div>

            {/* Tags List */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {tags.map(tag => (
                  <motion.div
                    key={tag.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-lg shadow-sm border border-border p-6 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: tag.color }}
                      />
                      <div>
                        <h3 className="font-bold text-lg">{tag.name}</h3>
                        <p className="text-sm text-gray-500">{tag.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteTag(tag.id)}
                      className="px-4 py-2 text-red-600 font-bold uppercase tracking-widest text-xs border border-red-200 rounded hover:bg-red-50 transition-all"
                    >
                      Delete
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
