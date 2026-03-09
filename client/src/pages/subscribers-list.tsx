import { useState } from "react";
import { motion } from "framer-motion";
import AdminHeader from "../components/AdminHeader";
import { Download, Trash2, Plus, Mail } from "lucide-react";

export default function SubscribersListPage() {
  const [subscribers, setSubscribers] = useState([
    { id: 1, email: "subscriber1@example.com", status: "Active", subscribedDate: "Jan 20, 2026" },
    { id: 2, email: "subscriber2@example.com", status: "Active", subscribedDate: "Feb 05, 2026" },
    { id: 3, email: "subscriber3@example.com", status: "Unconfirmed", subscribedDate: "Feb 15, 2026" },
    { id: 4, email: "subscriber4@example.com", status: "Inactive", subscribedDate: "Jan 10, 2026" },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newStatus, setNewStatus] = useState("Active");
  const [selectAll, setSelectAll] = useState(false);
  const [selectedSubscribers, setSelectedSubscribers] = useState<number[]>([]);

  const handleAddSubscriber = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEmail.trim()) {
      setSubscribers([...subscribers, {
        id: Math.max(...subscribers.map(s => s.id), 0) + 1,
        email: newEmail,
        status: newStatus,
        subscribedDate: new Date().toLocaleDateString()
      }]);
      setNewEmail("");
      setNewStatus("Active");
      setShowAddForm(false);
    }
  };

  const deleteSubscriber = (id: number) => {
    setSubscribers(subscribers.filter(s => s.id !== id));
    setSelectedSubscribers(selectedSubscribers.filter(sid => sid !== id));
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedSubscribers([]);
    } else {
      setSelectedSubscribers(subscribers.map(s => s.id));
    }
    setSelectAll(!selectAll);
  };

  const toggleSelect = (id: number) => {
    if (selectedSubscribers.includes(id)) {
      setSelectedSubscribers(selectedSubscribers.filter(sid => sid !== id));
    } else {
      setSelectedSubscribers([...selectedSubscribers, id]);
    }
  };

  const massSubscribe = () => {
    setSubscribers(subscribers.map(s =>
      selectedSubscribers.includes(s.id) ? { ...s, status: "Active" } : s
    ));
    setSelectedSubscribers([]);
    setSelectAll(false);
  };

  const massUnsubscribe = () => {
    setSubscribers(subscribers.map(s =>
      selectedSubscribers.includes(s.id) ? { ...s, status: "Inactive" } : s
    ));
    setSelectedSubscribers([]);
    setSelectAll(false);
  };

  const exportCSV = () => {
    const headers = ["Email", "Status", "Subscribed Date"];
    const csvContent = [
      headers.join(","),
      ...subscribers.map(sub =>
        [sub.email, sub.status, sub.subscribedDate].join(",")
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `subscribers-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Inactive":
        return "bg-gray-100 text-gray-800";
      case "Unconfirmed":
        return "bg-yellow-100 text-yellow-800";
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
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-serif font-bold">Subscribers</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="flex items-center gap-2 px-6 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-all"
              >
                <Plus className="w-4 h-4" />
                Add Subscriber
              </button>
              <button
                onClick={exportCSV}
                className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-gray-800 transition-all"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>
          </div>

          {/* Add Subscriber Form */}
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm border border-border p-6 mb-8"
            >
              <h3 className="text-lg font-bold mb-4">Add New Subscriber</h3>
              <form onSubmit={handleAddSubscriber} className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-black"
                    required
                  />
                </div>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="px-4 py-3 border border-border rounded focus:outline-none focus:border-black"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Unconfirmed">Unconfirmed</option>
                </select>
                <button
                  type="submit"
                  className="px-6 py-3 bg-black text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-accent transition-all"
                >
                  Add
                </button>
              </form>
            </motion.div>
          )}

          {/* Mass Actions */}
          {selectedSubscribers.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex justify-between items-center"
            >
              <p className="font-bold text-sm">{selectedSubscribers.length} subscriber(s) selected</p>
              <div className="flex gap-2">
                <button
                  onClick={massSubscribe}
                  className="px-4 py-2 bg-green-600 text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-green-700 transition-all"
                >
                  Mass Subscribe
                </button>
                <button
                  onClick={massUnsubscribe}
                  className="px-4 py-2 bg-red-600 text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-red-700 transition-all"
                >
                  Mass Unsubscribe
                </button>
              </div>
            </motion.div>
          )}

          {/* Subscribers Table */}
          <div className="bg-white rounded-lg shadow-sm border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={toggleSelectAll}
                      className="w-5 h-5 rounded cursor-pointer"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Subscribed Date</th>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((subscriber, idx) => (
                  <motion.tr
                    key={subscriber.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-b border-border hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedSubscribers.includes(subscriber.id)}
                        onChange={() => toggleSelect(subscriber.id)}
                        className="w-5 h-5 rounded cursor-pointer"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      {subscriber.email}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit ${getStatusColor(subscriber.status)}`}>
                        {subscriber.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{subscriber.subscribedDate}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => deleteSubscriber(subscriber.id)}
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
