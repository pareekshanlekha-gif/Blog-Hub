import { useState } from "react";
import { motion } from "framer-motion";
import AdminHeader from "../components/AdminHeader";
import { Save, X } from "lucide-react";

export default function MyAccountPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    bio: "Content creator and digital enthusiast",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  });

  const [formData, setFormData] = useState(profile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-serif font-bold mb-8">My Account</h1>

          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-sm border border-border p-8 space-y-8">
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <img 
                src={formData.avatar} 
                alt="Profile" 
                className="w-24 h-24 rounded-full border-4 border-black mb-4"
              />
              {isEditing && (
                <input 
                  type="text" 
                  name="avatar"
                  value={formData.avatar}
                  onChange={handleChange}
                  className="text-xs text-gray-500 text-center w-full max-w-xs px-2 py-1 border border-border rounded mt-2"
                  placeholder="Avatar URL"
                />
              )}
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-0 py-3 mt-2 bg-transparent border-b transition-colors ${
                    isEditing 
                      ? "border-black focus:outline-none cursor-text" 
                      : "border-gray-200 text-gray-600 cursor-default"
                  }`}
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-0 py-3 mt-2 bg-transparent border-b transition-colors ${
                    isEditing 
                      ? "border-black focus:outline-none cursor-text" 
                      : "border-gray-200 text-gray-600 cursor-default"
                  }`}
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  disabled={!isEditing}
                  rows={4}
                  className={`w-full px-0 py-3 mt-2 bg-transparent border-b transition-colors resize-none ${
                    isEditing 
                      ? "border-black focus:outline-none cursor-text" 
                      : "border-gray-200 text-gray-600 cursor-default"
                  }`}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center pt-6 border-t border-border">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-8 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-all"
                >
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-8 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-all"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-8 py-3 border border-black text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-gray-100 transition-all"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
