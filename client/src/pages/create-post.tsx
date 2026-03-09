import { useState } from "react";
import { motion } from "framer-motion";
import AdminHeader from "../components/AdminHeader";
import { Plus, X } from "lucide-react";

export default function CreatePostPage() {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: [] as string[],
    image: "",
  });

  const [tagInput, setTagInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Post created:", formData);
    alert("Post created successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-serif font-bold mb-8">Create New Post</h1>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-border p-8 space-y-8">
            {/* Title */}
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Post Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Enter post title"
                className="w-full px-4 py-3 mt-2 bg-white border border-border rounded focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Excerpt</label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Brief summary of your post"
                rows={3}
                className="w-full px-4 py-3 mt-2 bg-white border border-border rounded focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            {/* Content */}
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                placeholder="Write your post content here..."
                rows={10}
                className="w-full px-4 py-3 mt-2 bg-white border border-border rounded focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 mt-2 bg-white border border-border rounded focus:outline-none focus:border-black transition-colors"
              >
                <option value="">Select a category</option>
                <option value="AI Tools">AI Tools</option>
                <option value="Platforms">Platforms</option>
                <option value="SEO">SEO</option>
                <option value="Psychology">Psychology</option>
                <option value="Branding">Branding</option>
                <option value="Updates">Updates</option>
              </select>
            </div>

            {/* Featured Image */}
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Featured Image URL</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 mt-2 bg-white border border-border rounded focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Tags</label>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  placeholder="Add tags and press Enter"
                  className="flex-1 px-4 py-3 bg-white border border-border rounded focus:outline-none focus:border-black transition-colors"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-6 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-all flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>

              {/* Tags Display */}
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {formData.tags.map(tag => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 px-3 py-1 bg-gray-100 border border-border rounded-full text-sm"
                    >
                      <span>{tag}</span>
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="text-gray-500 hover:text-black transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="flex gap-4 justify-center pt-6 border-t border-border">
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-all"
              >
                Publish Post
              </button>
            </div>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
