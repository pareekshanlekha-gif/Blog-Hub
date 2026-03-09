import { useState } from "react";
import { Link, useLocation } from "wouter";
import { LogOut, User, ChevronDown } from "lucide-react";
import logoImg from "../assets/logo.png";

export default function AdminHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    // Handle logout logic here
    setLocation("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center hover:opacity-80 transition-opacity">
          <img src={logoImg} alt="MSWOT Logo" className="h-10 w-auto object-contain" />
        </Link>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">My Account</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg py-2 z-50">
                <Link href="/my-account" className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors">
                  Edit Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
