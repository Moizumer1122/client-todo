import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-teal-100 shadow-lg h-16 flex items-center p-4">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800 hover:scale-105 transition">
          TodoApp
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-5 ml-15">
          <Link to="/" className="text-gray-700 hover:text-blue-600 px-2 py-1 transition hover:scale-105">Home</Link>
          <Link to="/todos" className="text-gray-700 hover:text-blue-600 px-2 py-1 transition hover:scale-105">Todos</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-2 py-1 transition hover:scale-105">Contact</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 px-2 py-1 transition hover:scale-105">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 right-0 bg-teal-100 md:hidden shadow-lg border-t transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link onClick={() => setIsOpen(false)} to="/" className="block px-4 py-3 text-gray-800 hover:bg-teal-200 border-b">Home</Link>
        <Link onClick={() => setIsOpen(false)} to="/todos" className="block px-4 py-3 text-gray-800 hover:bg-teal-200 border-b">Todos</Link>
        <Link onClick={() => setIsOpen(false)} to="/contact" className="block px-4 py-3 text-gray-800 hover:bg-teal-200 border-b">Contact</Link>
        <Link onClick={() => setIsOpen(false)} to="/about" className="block px-4 py-3 text-gray-800 hover:bg-teal-200">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
