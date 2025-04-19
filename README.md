# EduAI Coder

An educational platform for teaching programming with AI-assisted coding. This project demonstrates best practices for a React frontend with a FastAPI backend.

## Project Structure

```
edu-ai-coder/
├── backend/                  # Python FastAPI backend
│   ├── main.py               # Main application entry point
│   ├── requirements.txt      # Python dependencies
│   ├── pytest.ini            # Pytest configuration
│   └── tests/                # Backend tests with pytest
├── frontend/                 # React frontend
│   ├── public/               # Static files
│   ├── src/                  # Source code
│   │   ├── components/       # Reusable React components
│   │   ├── pages/            # Page components
│   │   ├── services/         # API services
│   │   └── config/           # Configuration files
│   ├── tests/                # Frontend tests with Playwright
│   └── package.json          # npm dependencies
└── README.md                 # Project documentation
```

## Technology Stack

- **Frontend**: React, React Router, Tailwind CSS
- **Backend**: Python, FastAPI, Pydantic
- **Testing**: Playwright for frontend, pytest for backend
- **Development Tools**: npm, pip

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the backend server:
   ```bash
   python main.py
   ```
   The API will be available at `http://localhost:8000`.

5. Run tests:
   ```bash
   pytest
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

4. Run Playwright tests:
   ```bash
   npx playwright test
   ```

## API Documentation

When the backend is running, you can access the interactive API documentation at:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Best Practices Demonstrated

1. **Project Structure**
   - Clean separation between frontend and backend
   - Organized code by feature/functionality

2. **Testing**
   - End-to-end testing with Playwright
   - Backend unit testing with pytest
   - Test-driven development approach

3. **Code Quality**
   - Type hinting with Pydantic models
   - Modern React patterns (hooks, functional components)
   - Clean, maintainable code structure

4. **UI/UX Design**
   - Responsive design with Tailwind CSS
   - Accessible components
   - User-friendly error handling

5. **API Design**
   - RESTful API design principles
   - Comprehensive API documentation
   - Proper error handling and status codes

## License

This project is intended for educational purposes.
