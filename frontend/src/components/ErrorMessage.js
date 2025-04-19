import React from 'react';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="text-center py-8">
      <div className="bg-red-100 text-red-700 p-4 rounded-lg inline-block mb-4">
        <p className="font-medium">{message || 'An error occurred'}</p>
      </div>
      
      {onRetry && (
        <button 
          onClick={onRetry}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
