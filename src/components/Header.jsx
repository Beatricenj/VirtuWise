import React from 'react';
import { BookOpen } from 'lucide-react';

const Header = ({ currentPage, navigateTo, user, setUser }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigateTo('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              VirtuWise
            </h1>
          </div>
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => navigateTo('home')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === 'home' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {user.name}</span>
                <button
                  onClick={() => setUser(null)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigateTo('auth')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700"
              >
                Sign In
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
