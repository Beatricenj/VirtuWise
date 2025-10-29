import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer = ({ navigateTo }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">VirtuWise</h3>
            </div>
            <p className="text-gray-400">
              Your trusted partner in academic success and virtual asssistant support.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => navigateTo('academic-support')} className="hover:text-white transition-colors">Academic Support</button></li>
              <li><button onClick={() => navigateTo('virtual-assistance')} className="hover:text-white transition-colors">Virtual Assistance</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@virtuwise.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Hours: 24/7 Support Available</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 VirtuWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
