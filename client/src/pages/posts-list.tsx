import { useState } from "react";
import { motion } from "framer-motion";
import AdminHeader from "../components/AdminHeader";
import { Link } from "wouter";
import { Edit2, Trash2, Plus } from "lucide-react";

export default function PostsListPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Future of AI in Content Creation",
      category: "AI Tools",
      date: "Mar 10, 2026",
      status: "Published",
      views: 1250,
    },
    {
      id: 2,
      title: "SEO Best Practices 2026",
      category: "SEO",
      date: "Mar 09, 2026",
      status: "Published",
      views: 890,
    },
    {
      id: 3,
      title: "Understanding Brand Psychology",
      category: "Psychology",
      date: "Mar 08, 2026",
      status: "Draft",
      views: 0,
    },
  ]);

  const deletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
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
            <h1 className="text-4xl font-serif font-bold">My Posts</h1>
            <Link href="/create-post">
              <button className="flex items-center gap-2 px-6 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-all">
                <Plus className="w-4 h-4" />
                New Post
              </button>
            </Link>
          </div>

          {/* Posts Table */}
          <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Title</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Views</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, idx) => (
                  <motion.tr
                    key={post.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-b border-border hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium">{post.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{post.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{post.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                        post.status === "Published"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">{post.views}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
