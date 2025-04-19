import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">EduAI Coder</Link>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/lessons" className="hover:underline">Lessons</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
