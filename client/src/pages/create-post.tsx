import { useState, useRef } from "react";
import { motion } from "framer-motion";
import AdminHeader from "../components/AdminHeader";
import { Plus, X, Upload } from "lucide-react";

export default function CreatePostPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: [] as string[],
    image: "",
    postUrl: "/blog/new-post",
    author: "John Doe",
    date: new Date().toISOString().split('T')[0],
    published: false,
  });

  const [tagInput, setTagInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({
          ...prev,
          image: event.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
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
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Main Content */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            <h1 className="text-4xl font-serif font-bold">Create New Post</h1>

            <div className="bg-white rounded-lg shadow-sm border border-border p-8 space-y-8">
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

              {/* Featured Image */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Featured Image</label>
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-dashed border-border rounded hover:border-black transition-colors"
                  >
                    <Upload className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-widest text-xs">Upload Image</span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>

                {/* Image Preview */}
                {formData.image && (
                  <div className="mt-4">
                    <img 
                      src={formData.image} 
                      alt="Preview" 
                      className="w-full h-64 object-cover rounded border border-border"
                    />
                  </div>
                )}
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
                  rows={12}
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
                  {formData.published ? "Publish Post" : "Save as Draft"}
                </button>
              </div>
            </div>
          </form>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-lg shadow-sm border border-border p-6 space-y-6">
              <h3 className="text-lg font-serif font-bold">Post Settings</h3>

              {/* Published Status */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 rounded cursor-pointer"
                  />
                  <span className="text-sm font-bold uppercase tracking-widest">
                    {formData.published ? "Published" : "Unpublished"}
                  </span>
                </label>
              </div>

              {/* Post URL */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Post URL</label>
                <input
                  type="text"
                  name="postUrl"
                  value={formData.postUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 mt-2 bg-white border border-border rounded focus:outline-none focus:border-black transition-colors text-sm"
                />
              </div>

              {/* Author */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Author</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-3 mt-2 bg-white border border-border rounded focus:outline-none focus:border-black transition-colors text-sm"
                />
              </div>

              {/* Date */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Publish Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 mt-2 bg-white border border-border rounded focus:outline-none focus:border-black transition-colors text-sm"
                />
              </div>

              {/* Quick Stats */}
              <div className="pt-4 border-t border-border space-y-2">
                <p className="text-xs text-gray-500">
                  <strong>Word Count:</strong> {formData.content.split(/\s+/).filter(w => w).length}
                </p>
                <p className="text-xs text-gray-500">
                  <strong>Reading Time:</strong> ~{Math.ceil(formData.content.split(/\s+/).filter(w => w).length / 200)} min
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
