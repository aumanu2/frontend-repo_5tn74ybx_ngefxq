import React from 'react';
import { User, LogIn, UserPlus, LogOut } from 'lucide-react';

const Navbar = ({ isAuthenticated, onLoginClick, onSignupClick, onLogoutClick, onProfileClick }) => {
  return (
    <header className="w-full fixed top-0 left-0 z-40 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer select-none" onClick={onProfileClick}>
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 shadow-lg" />
          <span className="font-semibold tracking-tight text-white text-lg">StudySphere</span>
        </div>

        {/* Auth Controls */}
        <div className="flex items-center space-x-3">
          {!isAuthenticated ? (
            <>
              <button
                onClick={onLoginClick}
                className="inline-flex items-center gap-2 rounded-md bg-white/10 text-white px-4 py-2 text-sm hover:bg-white/20 transition-colors"
              >
                <LogIn size={16} />
                Login
              </button>
              <button
                onClick={onSignupClick}
                className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
              >
                <UserPlus size={16} />
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onProfileClick}
                className="inline-flex items-center gap-2 rounded-md bg-white/10 text-white px-4 py-2 text-sm hover:bg-white/20 transition-colors"
              >
                <User size={16} />
                My Profile
              </button>
              <button
                onClick={onLogoutClick}
                className="inline-flex items-center gap-2 rounded-md bg-red-500 text-white px-4 py-2 text-sm hover:bg-red-600 transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
