import { useState, useRef } from "react";
import { motion } from "framer-motion";
import AdminHeader from "../components/AdminHeader";
import { Save, X, AlertCircle, CheckCircle } from "lucide-react";

export default function MyAccountPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: "johndoe",
    email: "john@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    aboutAuthor: "Passionate content creator and digital enthusiast sharing insights on design and technology.",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  });

  const [formData, setFormData] = useState(profile);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const validatePassword = (password: string) => {
    const errors: string[] = [];
    if (password.length < 12) errors.push("Must be at least 12 characters");
    if (!/[A-Z]/.test(password)) errors.push("Must contain uppercase letter");
    if (!/[a-z]/.test(password)) errors.push("Must contain lowercase letter");
    if (!/[0-9]/.test(password)) errors.push("Must contain number");
    if (!/[!@#$%^&*]/.test(password)) errors.push("Must contain special character (!@#$%^&*)");
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === "newPassword") {
      if (value) {
        setPasswordErrors(validatePassword(value));
      } else {
        setPasswordErrors([]);
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({
          ...prev,
          profileImage: event.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (formData.newPassword && passwordErrors.length > 0) {
      alert("Please fix password validation errors");
      return;
    }
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setPasswordErrors([]);
    setIsEditing(false);
  };

  const isPasswordChanging = formData.newPassword || formData.confirmPassword;
  const isEmailChanging = formData.email !== profile.email;
  const requiresCurrentPassword = isEmailChanging || isPasswordChanging;

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      
      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-serif font-bold mb-8">My Account</h1>

          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-sm border border-border p-8 space-y-8">
            {/* Profile Picture */}
            <div className="flex flex-col items-center">
              <img 
                src={formData.profileImage} 
                alt="Profile" 
                className="w-32 h-32 rounded-full border-4 border-black mb-6 object-cover"
              />
              {isEditing && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-6 py-2 text-sm border border-black rounded font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                >
                  Change Picture
                </button>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Username */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Username* <span className="text-gray-300 text-[8px]">(non-editable)</span>
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  disabled={true}
                  className="w-full px-0 py-3 mt-2 bg-transparent border-b border-gray-200 text-gray-600 cursor-not-allowed"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Email Address* <span className="text-gray-300 text-[8px]">(non-editable)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled={true}
                  className="w-full px-0 py-3 mt-2 bg-transparent border-b border-gray-200 text-gray-600 cursor-not-allowed"
                />
              </div>

              {/* Current Password - Show if trying to change email or password */}
              {isEditing && requiresCurrentPassword && (
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Current Password
                  </label>
                  <p className="text-[10px] text-gray-400 mt-1 mb-2">
                    Required if you want to change the Email address or the Password field below. <a href="#" className="text-blue-600 hover:underline">Reset your password.</a>
                  </p>
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    placeholder="Enter your current password"
                    className="w-full px-4 py-3 mt-2 bg-white border border-border rounded focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              )}

              {/* Password */}
              {isEditing && (
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Password
                  </label>
                  <p className="text-[10px] text-gray-400 mt-1 mb-2">
                    To change the current user password, enter the new password in both fields.
                  </p>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    placeholder="Enter new password (optional)"
                    className="w-full px-4 py-3 mt-2 bg-white border border-border rounded focus:outline-none focus:border-black transition-colors"
                  />

                  {/* Password Validation Messages */}
                  {formData.newPassword && (
                    <div className="mt-3 space-y-1">
                      {passwordErrors.length === 0 ? (
                        <div className="flex items-center gap-2 text-green-600 text-xs">
                          <CheckCircle className="w-4 h-4" />
                          Password is valid
                        </div>
                      ) : (
                        passwordErrors.map((error, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-red-600 text-xs">
                            <AlertCircle className="w-4 h-4" />
                            {error}
                          </div>
                        ))
                      )}
                    </div>
                  )}

                  {/* Confirm Password - Only show if password field has value */}
                  {formData.newPassword && (
                    <div className="mt-6">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm new password"
                        className={`w-full px-4 py-3 mt-2 bg-white border rounded focus:outline-none transition-colors ${
                          formData.confirmPassword && formData.newPassword !== formData.confirmPassword
                            ? "border-red-500 focus:border-red-600"
                            : "border-border focus:border-black"
                        }`}
                      />
                      {formData.confirmPassword && (
                        <p className={`text-xs mt-2 ${
                          formData.newPassword === formData.confirmPassword
                            ? "text-green-600 flex items-center gap-1"
                            : "text-red-600 flex items-center gap-1"
                        }`}>
                          {formData.newPassword === formData.confirmPassword ? (
                            <>
                              <CheckCircle className="w-4 h-4" />
                              Passwords match
                            </>
                          ) : (
                            <>
                              <AlertCircle className="w-4 h-4" />
                              Passwords do not match
                            </>
                          )}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* About Author */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">About Author</label>
                <textarea
                  name="aboutAuthor"
                  value={formData.aboutAuthor}
                  onChange={handleChange}
                  disabled={!isEditing}
                  rows={5}
                  className={`w-full px-4 py-3 mt-2 bg-transparent border-b transition-colors resize-none ${
                    isEditing 
                      ? "border-black focus:outline-none cursor-text bg-white border rounded" 
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
                    disabled={formData.newPassword && passwordErrors.length > 0}
                    className="flex items-center gap-2 px-8 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
