import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { lessonService } from '../services/api';

const LessonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLesson = async () => {
    try {
      setLoading(true);
      const response = await lessonService.getById(id);
      setLesson(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch lesson details. Please try again later.');
      console.error('Error fetching lesson:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch lesson on component mount or when ID changes
  useEffect(() => {
    fetchLesson();
  }, [id]);

  // Mock data for development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && loading && !lesson) {
      const mockLessons = {
        1: {
          id: 1,
          title: "Introduction to Python",
          description: "Learn the basics of Python programming",
          difficulty: "Beginner",
          content: "# Introduction to Python\n\nPython is a high-level, interpreted programming language known for its readability and simplicity.\n\n## Getting Started\n\n```python\n# Your first Python program\nprint('Hello, World!')\n```\n\n## Variables and Data Types\n\n```python\n# Variables\nname = 'Alice'\nage = 30\nis_student = True\n\n# Print variables\nprint(f'{name} is {age} years old.')\n```"
        },
        2: {
          id: 2,
          title: "Web Development with React",
          description: "Build interactive UIs with React",
          difficulty: "Intermediate",
          content: "# React Fundamentals\n\nReact is a JavaScript library for building user interfaces.\n\n## Creating Components\n\n```jsx\n// A simple React component\nfunction Welcome() {\n  return <h1>Hello, React!</h1>;\n}\n\n// Using the component\nexport default function App() {\n  return (\n    <div>\n      <Welcome />\n    </div>\n  );\n}\n```"
        },
        3: {
          id: 3,
          title: "AI Integration Basics",
          description: "Learn how to integrate AI into your applications",
          difficulty: "Advanced",
          content: "# AI Integration\n\nLearn how to integrate AI models into your applications.\n\n## Making API Requests\n\n```javascript\n// Example of calling an AI API\nasync function generateText(prompt) {\n  const response = await fetch('https://api.example.com/generate', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ prompt })\n  });\n  \n  return await response.json();\n}\n```"
        }
      };
      
      setTimeout(() => {
        if (mockLessons[id]) {
          setLesson(mockLessons[id]);
        } else {
          setError('Lesson not found');
        }
        setLoading(false);
      }, 500);
    }
  }, [id, loading, lesson]);

  if (loading) {
    return <LoadingSpinner message="Loading lesson content..." />;
  }

  if (error || !lesson) {
    return (
      <div className="text-center py-10">
        <ErrorMessage message={error || 'Lesson not found'} />
        <div className="mt-4">
          <button 
            onClick={() => navigate('/lessons')}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Back to Lessons
          </button>
        </div>
      </div>
    );
  }

  // Function to render markdown content
  const renderContent = () => {
    if (!lesson.content) return <p>No content available for this lesson.</p>;
    
    // In a real app, you would use a markdown parser like react-markdown
    // This is a simplified version for demo purposes
    return (
      <div className="prose max-w-none">
        <pre className="whitespace-pre-wrap">
          {lesson.content}
        </pre>
      </div>
    );
  };

  const difficultyColor = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-blue-100 text-blue-800',
    'Advanced': 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <button 
          onClick={() => navigate('/lessons')}
          className="text-blue-600 hover:underline flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Lessons
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
        <div className="flex items-center mb-6">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColor[lesson.difficulty]}`}>
            {lesson.difficulty}
          </span>
        </div>
        <p className="text-lg mb-8">{lesson.description}</p>
        
        <div className="border-t pt-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
