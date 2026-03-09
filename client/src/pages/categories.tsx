import { useState } from "react";
import { motion } from "framer-motion";
import AdminHeader from "../components/AdminHeader";
import { Edit2, Trash2, Plus, Eye, EyeOff } from "lucide-react";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: "AI Tools", slug: "ai-tools", description: "Artificial Intelligence tools", showInMenu: true },
    { id: 2, name: "Platforms", slug: "platforms", description: "Digital platforms", showInMenu: true },
    { id: 3, name: "SEO", slug: "seo", description: "Search Engine Optimization", showInMenu: true },
    { id: 4, name: "Psychology", slug: "psychology", description: "Human behavior and cognition", showInMenu: false },
    { id: 5, name: "Branding", slug: "branding", description: "Brand and identity design", showInMenu: true },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    showInMenu: true,
  });

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim()) {
      if (editingId) {
        setCategories(categories.map(cat =>
          cat.id === editingId
            ? { ...cat, name: formData.name, slug: formData.slug, description: formData.description, showInMenu: formData.showInMenu }
            : cat
        ));
        setEditingId(null);
      } else {
        setCategories([...categories, {
          id: Math.max(...categories.map(c => c.id), 0) + 1,
          name: formData.name,
          slug: formData.slug || formData.name.toLowerCase().replace(/\s+/g, '-'),
          description: formData.description,
          showInMenu: formData.showInMenu,
        }]);
      }
      setFormData({ name: "", slug: "", description: "", showInMenu: true });
      setShowAddForm(false);
    }
  };

  const startEdit = (category: typeof categories[0]) => {
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description,
      showInMenu: category.showInMenu,
    });
    setEditingId(category.id);
    setShowAddForm(true);
  };

  const deleteCategory = (id: number) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  const toggleMenuVisibility = (id: number) => {
    setCategories(categories.map(cat =>
      cat.id === id ? { ...cat, showInMenu: !cat.showInMenu } : cat
    ));
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setEditingId(null);
    setFormData({ name: "", slug: "", description: "", showInMenu: true });
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
            <h1 className="text-4xl font-serif font-bold">Categories</h1>
            {!showAddForm && (
              <button
                onClick={() => setShowAddForm(true)}
                className="flex items-center gap-2 px-6 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-all"
              >
                <Plus className="w-4 h-4" />
                New Category
              </button>
            )}
          </div>

          {/* Add/Edit Category Form */}
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm border border-border p-8 mb-8"
            >
              <h2 className="text-2xl font-serif font-bold mb-6">
                {editingId ? "Edit Category" : "Create New Category"}
              </h2>
              <form onSubmit={handleAddCategory} className="space-y-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Category Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Artificial Intelligence"
                    className="w-full px-4 py-3 mt-2 border border-border rounded focus:outline-none focus:border-black"
                    required
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Slug</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="ai-tools"
                    className="w-full px-4 py-3 mt-2 border border-border rounded focus:outline-none focus:border-black"
                  />
                  <p className="text-xs text-gray-400 mt-1">Auto-generated if left empty</p>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Category description"
                    rows={4}
                    className="w-full px-4 py-3 mt-2 border border-border rounded focus:outline-none focus:border-black resize-none"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.showInMenu}
                      onChange={(e) => setFormData({ ...formData, showInMenu: e.target.checked })}
                      className="w-5 h-5 rounded cursor-pointer"
                    />
                    <span className="text-sm font-bold uppercase tracking-widest">
                      Show in Main Menu
                    </span>
                  </label>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-all"
                  >
                    {editingId ? "Update Category" : "Create Category"}
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-8 py-3 border border-black text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-gray-100 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Categories List */}
          <div className="space-y-4">
            {categories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-lg shadow-sm border p-6 flex items-center justify-between transition-all ${
                  category.showInMenu
                    ? "bg-white border-border"
                    : "bg-gray-100 border-gray-300"
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold">{category.name}</h3>
                    {category.showInMenu ? (
                      <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-bold uppercase">
                        <Eye className="w-3 h-3" />
                        In Menu
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-bold uppercase">
                        <EyeOff className="w-3 h-3" />
                        Hidden
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                  <p className="text-xs text-gray-400 mt-2">Slug: <code className="bg-gray-200 px-2 py-1 rounded">{category.slug}</code></p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => toggleMenuVisibility(category.id)}
                    className={`p-2 rounded transition-colors ${
                      category.showInMenu
                        ? "text-green-600 hover:bg-green-50"
                        : "text-gray-400 hover:bg-gray-200"
                    }`}
                    title="Toggle menu visibility"
                  >
                    {category.showInMenu ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => startEdit(category)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteCategory(category.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
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
