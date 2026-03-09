import { useState } from "react";
import { motion } from "framer-motion";
import AdminHeader from "../components/AdminHeader";
import { Edit2, Trash2, Shield, User } from "lucide-react";

export default function UsersListPage() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      joinDate: "Jan 15, 2026",
      posts: 12,
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Editor",
      joinDate: "Feb 01, 2026",
      posts: 8,
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "Contributor",
      joinDate: "Feb 15, 2026",
      posts: 5,
      status: "Active",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      role: "Contributor",
      joinDate: "Mar 01, 2026",
      posts: 2,
      status: "Inactive",
    },
  ]);

  const deleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-red-100 text-red-800";
      case "Editor":
        return "bg-blue-100 text-blue-800";
      case "Contributor":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
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
          <h1 className="text-4xl font-serif font-bold mb-8">Users</h1>

          {/* Users Table */}
          <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Role</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Join Date</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Posts</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-b border-border hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit ${getRoleBadgeColor(user.role)}`}>
                        <Shield className="w-3 h-3" />
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.joinDate}</td>
                    <td className="px-6 py-4 text-sm font-medium">{user.posts}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteUser(user.id)}
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
