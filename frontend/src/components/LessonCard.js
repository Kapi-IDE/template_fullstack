import React from 'react';
import { Link } from 'react-router-dom';

const LessonCard = ({ lesson }) => {
  const difficultyColor = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-blue-100 text-blue-800',
    'Advanced': 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{lesson.title}</h3>
        <p className="text-gray-700 mb-4">{lesson.description}</p>
        <div className="flex justify-between items-center">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColor[lesson.difficulty]}`}>
            {lesson.difficulty}
          </span>
          <Link 
            to={`/lessons/${lesson.id}`} 
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            View Lesson
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
