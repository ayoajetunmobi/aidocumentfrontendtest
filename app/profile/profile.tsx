"use client"
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Mail, 
  Users, 
  Briefcase, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  Camera, 
  MapPin, 
  Building, 
  Calendar 
} from 'lucide-react';

// Navigation configuration
const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'email', label: 'Email Automation', icon: Mail },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'teams', label: 'Teams', icon: Users }, // Reuses Users icon, or group icon
  { id: 'workspace', label: 'Workspace', icon: Briefcase },
];

export const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Mock User Data
  const user = {
    name: 'Sarah Jenkins',
    role: 'Lead Operations Product Manager',
    company: 'Stellar Tech Analytics',
    location: 'San Francisco, CA',
    joinedDate: 'Joined March 2024',
    avatarUrl: 'https://unsplash.com'
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-slate-200 bg-white flex flex-col justify-between hidden md:flex">
        <div>
          {/* Logo Brand Area */}
          <div className="h-16 flex items-center px-6 border-b border-slate-100">
            <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            <span className="ml-3 font-semibold text-slate-800 text-base">SaaSPlatform</span>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-100 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50">
            <Settings className="w-4 h-4 text-slate-400" />
            Settings
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50/50">
            <LogOut className="w-4 h-4 text-rose-500" />
            Log Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* HEADER BAR */}
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 z-10">
          <div className="relative w-64 max-w-xs hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search everything..." 
              className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
            />
          </div>
          
          <div className="flex items-center gap-4 ml-auto">
            <button className="p-2 text-slate-400 hover:text-slate-600 relative rounded-full hover:bg-slate-50">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <img src={user.avatarUrl} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
              <span className="text-sm font-medium text-slate-700 hidden sm:inline">{user.name}</span>
            </div>
          </div>
        </header>

        {/* DYNAMIC CONTENT CONTAINER */}
        <main className="flex-1 p-6 md:p-8 max-w-5xl w-full mx-auto overflow-y-auto">
          
          {/* PROFILE VIEW HERO */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-6">
            {/* Banner block background */}
            <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 relative"></div>
            
            {/* Profile Meta Section */}
            <div className="px-6 pb-6 relative flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 -mt-12">
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
                {/* Avatar Wrapper */}
                <div className="relative group">
                  <img 
                    src={user.avatarUrl} 
                    alt={user.name} 
                    className="w-24 h-24 rounded-2xl border-4 border-white shadow-md bg-white object-cover" 
                  />
                  <button className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white border-4 border-transparent">
                    <Camera className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Text Layout */}
                <div className="mb-1">
                  <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    {user.name}
                  </h1>
                  <p className="text-sm text-slate-500 font-medium">{user.role}</p>
                </div>
              </div>

              <button className="px-4 py-2 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-sm transition-colors self-stretch sm:self-auto text-center">
                Edit Profile
              </button>
            </div>

            {/* Quick Stats/Metadata Row */}
            <div className="border-t border-slate-100 px-6 py-4 bg-slate-50/50 flex flex-wrap gap-y-2 gap-x-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-slate-400" />
                {user.company}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {user.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {user.joinedDate}
              </span>
            </div>
          </div>

          {/* PAGE BODY SLOTS (Conditional template depending on active tab) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left 2/3 Content Column */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900 mb-4">
                  Active Context: {navItems.find(i => i.id === activeTab)?.label}
                </h3>
                <div className="h-48 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-sm text-slate-400">
                  Panel view content placeholder
                </div>
              </div>
            </div>

            {/* Right 1/3 Sidebar Column */}
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Workspace Status</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-medium text-slate-500 mb-1">
                      <span>Tasks Met</span>
                      <span>84%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: '84%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-medium text-slate-500 mb-1">
                      <span>Automation Health</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
};
