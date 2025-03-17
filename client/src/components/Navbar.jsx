import React from 'react';
import { Building2, LayoutDashboard, Settings, Users, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };
  const logOut = ()=>{
    localStorage.removeItem("val");
    window.location.href = "/"
  }
  return (
    <nav className="bg-blue-600 text-white h-full fixed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full mt-10 ">
        <div className="h-full  ">
          <div className="flex items-center space-x-2">
            <Building2 className="w-8 h-8" />
            <span className="text-xl font-bold">WorkSphere</span>
          </div>
          
          <div className=" items-center space-x-4">
            <Link
              to="/dashboard"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-blue-700 ${isActive('/dashboard')}`}
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            
            <Link
              to="/dashboard/employees"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-blue-700 ${isActive('/dashboard/employees')}`}
            >
              <Users size={20} />
              <span>Manage Employees</span>
            </Link>
            
            <Link
              to="/dashboard/settings"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-blue-700 ${isActive('/dashboard/settings')}`}
            >
              <Settings size={20} />
              <span>Settings</span>
            </Link>
            
            <button
              onClick={logOut}
              className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-blue-700"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}