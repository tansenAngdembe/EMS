import React from 'react';
import {Link} from "react-router-dom"
import { Users, BarChart3, Shield, Clock, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import hero from "../assets/hero.png"
import about from "../assets/aboutus.jpg"
function Landingpage() {
  return (
    <div className="min-h-screen bg-white ">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">WorkSphere</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
              <a href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <button  className="text-gray-700 hover:text-blue-600"><Link to="/login">Login</Link></button>
              <button  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                <Link to = "/register">
                 Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                 Work Smarter with WorkSphere
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Transform your work operations with our Employee Management System. 
                Simplify payroll, and performance management all in one place.
              </p>
              <div className="mt-8 flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center">
                 <Link to="/register"> Get Started </Link><ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src={hero} 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
            <p className="mt-4 text-lg text-gray-600">Everything you need to manage your workforce effectively</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <Users className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Employee Directory</h3>
              <p className="mt-2 text-gray-600">Centralized database for all employee information and documentation.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <BarChart3 className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Performance Tracking</h3>
              <p className="mt-2 text-gray-600">Monitor and evaluate employee performance with detailed analytics.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <Clock className="h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Time Management</h3>
              <p className="mt-2 text-gray-600">Efficient attendance tracking and leave management system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">How It Works</h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Sign Up', desc: 'Create your account' },
              { step: '2', title: 'Setup', desc: 'Configure your workspace' },
              { step: '3', title: 'Import', desc: 'Add your employee data' },
              { step: '4', title: 'Manage', desc: 'Start managing efficiently' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
              <p className="mt-4 text-lg text-gray-600">
                We're dedicated to transforming how businesses manage their workforce. With years of experience
                in HR technology, we understand the challenges organizations face and provide solutions that make
                a difference.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-gray-700">1+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-gray-700">2+ Customers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-gray-700">99.9% Uptime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={about} 
                alt="Office team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">WorkSphere</span>
              </div>
              <p className="mt-4 text-gray-400">
                Empowering businesses with smart solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>               
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 EmpowerHR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landingpage;