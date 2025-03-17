import React from 'react';
import { Bell, Lock, User, Building } from 'lucide-react';
import { Provider } from '../context/contextProvider';
import { Link } from 'react-router-dom';

export function Settings() {
  const {companyData} = Provider()
  const {company} =companyData;
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
      
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold">Account Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={company?.email}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value="Admin User"
              />
            </div>
          </div>
        </div>

        <div className="p-6 border-b">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">Email Notifications</h3>
                <p className="text-sm text-gray-500">Receive email updates about system activities</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="p-6 border-b">
          <div className="flex items-center space-x-3 mb-4">
            <Building className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold">Company Information</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={company?.companyName}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Industry</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={company?.industry}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Size</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={company?.companySize}
              /> 
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Website</label>
              {/* <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={company?.companyName}
              /> */}
              <Link target='_blank' to={company?.website}  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
               {company?.website}
              </Link>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Registered At</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={new Date(company?.registerDate).toLocaleDateString()}
              /> 
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Lock className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold">Security</h2>
          </div>
          <div className="space-y-4">
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Change Password
            </button>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Two-Factor Authentication
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}