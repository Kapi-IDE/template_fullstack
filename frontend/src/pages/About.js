import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">About EduAI Coder</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          EduAI Coder is designed to make learning programming more accessible, interactive, and 
          engaging through the power of AI. We believe that everyone should have the opportunity 
          to learn coding skills in an environment that adapts to their individual needs and learning style.
        </p>
        <p>
          Our platform combines traditional learning methods with cutting-edge AI technology to provide 
          personalized guidance, instant feedback, and practical exercises that prepare students for 
          real-world coding challenges.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-3 mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Interactive Learning</h3>
              <p>
                Our lessons combine theory with practice through interactive coding exercises that give 
                immediate feedback. The AI analyzes your code in real-time to help you understand and fix errors.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-green-100 rounded-full p-3 mr-4">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Project-Based Learning</h3>
              <p>
                Apply what you learn through guided projects that help you build a portfolio while learning. 
                Each project is designed to reinforce key concepts and teach practical development skills.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-purple-100 rounded-full p-3 mr-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Personalized Guidance</h3>
              <p>
                Our AI adapts to your learning pace and style, providing custom recommendations and 
                additional resources when needed to ensure you master each concept before moving on.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-4">Our Technology Stack</h2>
        <p className="mb-4">
          EduAI Coder is built using modern technologies and best practices in software development:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>React frontend for a responsive and interactive user interface</li>
          <li>FastAPI backend for efficient API development with Python</li>
          <li>Comprehensive testing suite with Playwright and pytest</li>
          <li>State-of-the-art AI models to provide coding assistance and feedback</li>
          <li>CI/CD pipelines for continuous deployment and integration</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
