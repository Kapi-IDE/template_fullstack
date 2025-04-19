import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to EduAI Coder</h1>
        <p className="text-xl mb-8">
          An interactive platform for learning programming with the help of AI-powered tools.
        </p>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">What you'll learn:</h2>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Programming fundamentals with interactive exercises
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Web development with React and modern frameworks
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              AI integration and practical applications
            </li>
          </ul>
          <Link to="/lessons" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg inline-block">
            Explore Lessons
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
