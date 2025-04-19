import React, { useState, useEffect } from 'react';
import LessonCard from '../components/LessonCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { lessonService } from '../services/api';

const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLessons = async () => {
    try {
      setLoading(true);
      const response = await lessonService.getAll();
      setLessons(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch lessons. Please try again later.');
      console.error('Error fetching lessons:', err);
    } finally {
      setLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchLessons();
  }, []);

  // For demonstration, use mock data if API is not available
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && loading && !lessons.length) {
      // Mock data for development
      const mockLessons = [
        {
          id: 1,
          title: "Introduction to Python",
          description: "Learn the basics of Python programming",
          difficulty: "Beginner"
        },
        {
          id: 2,
          title: "Web Development with React",
          description: "Build interactive UIs with React",
          difficulty: "Intermediate"
        },
        {
          id: 3,
          title: "AI Integration Basics",
          description: "Learn how to integrate AI into your applications",
          difficulty: "Advanced"
        }
      ];
      
      setTimeout(() => {
        setLessons(mockLessons);
        setLoading(false);
      }, 500); // Simulate network delay
    }
  }, [loading, lessons.length]);

  if (loading) {
    return <LoadingSpinner message="Loading lessons..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchLessons} />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Available Lessons</h1>
      
      {lessons.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">No lessons available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Lessons;
