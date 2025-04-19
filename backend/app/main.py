from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
import config

app = FastAPI(
    title="EduAI Coder API", 
    description="API for the EduAI Coder educational product",
    version="0.1.0",
    docs_url="/api/docs" if config.API_PREFIX else "/docs",
    redoc_url="/api/redoc" if config.API_PREFIX else "/redoc",
    openapi_url="/api/openapi.json" if config.API_PREFIX else "/openapi.json"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=config.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Example models
class Lesson(BaseModel):
    id: Optional[int] = None
    title: str
    description: str
    difficulty: str
    content: Optional[str] = None

# In-memory database for examples
lessons_db = [
    Lesson(
        id=1, 
        title="Introduction to Python", 
        description="Learn the basics of Python programming", 
        difficulty="Beginner",
        content="# Introduction to Python\n\nPython is a high-level, interpreted programming language known for its readability and simplicity.\n\n## Getting Started\n\n```python\n# Your first Python program\nprint('Hello, World!')\n```\n\n## Variables and Data Types\n\n```python\n# Variables\nname = 'Alice'\nage = 30\nis_student = True\n\n# Print variables\nprint(f'{name} is {age} years old.')\n```"
    ),
    Lesson(
        id=2, 
        title="Web Development with React", 
        description="Build interactive UIs with React", 
        difficulty="Intermediate",
        content="# React Fundamentals\n\nReact is a JavaScript library for building user interfaces.\n\n## Creating Components\n\n```jsx\n// A simple React component\nfunction Welcome() {\n  return <h1>Hello, React!</h1>;\n}\n\n// Using the component\nexport default function App() {\n  return (\n    <div>\n      <Welcome />\n    </div>\n  );\n}\n```"
    ),
    Lesson(
        id=3, 
        title="AI Integration Basics", 
        description="Learn how to integrate AI into your applications", 
        difficulty="Advanced",
        content="# AI Integration\n\nLearn how to integrate AI models into your applications.\n\n## Making API Requests\n\n```javascript\n// Example of calling an AI API\nasync function generateText(prompt) {\n  const response = await fetch('https://api.example.com/generate', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ prompt })\n  });\n  \n  return await response.json();\n}\n```"
    )
]

@app.get("/")
async def root():
    return {"message": "Welcome to EduAI Coder API"}

@app.get("/api/lessons", response_model=List[Lesson])
async def get_lessons():
    return lessons_db

@app.get("/api/lessons/{lesson_id}", response_model=Lesson)
async def get_lesson(lesson_id: int):
    for lesson in lessons_db:
        if lesson.id == lesson_id:
            return lesson
    raise HTTPException(status_code=404, detail="Lesson not found")

@app.post("/api/lessons", response_model=Lesson)
async def create_lesson(lesson: Lesson):
    # Assign new ID (in a real app, this would be handled by a database)
    new_id = max(lesson.id for lesson in lessons_db) + 1 if lessons_db else 1
    new_lesson = Lesson(id=new_id, **lesson.model_dump(exclude={"id"}))
    lessons_db.append(new_lesson)
    return new_lesson

@app.put("/api/lessons/{lesson_id}", response_model=Lesson)
async def update_lesson(lesson_id: int, lesson: Lesson):
    for i, existing_lesson in enumerate(lessons_db):
        if existing_lesson.id == lesson_id:
            # Update the lesson while preserving its ID
            updated_lesson = Lesson(id=lesson_id, **lesson.model_dump(exclude={"id"}))
            lessons_db[i] = updated_lesson
            return updated_lesson
    raise HTTPException(status_code=404, detail="Lesson not found")

@app.delete("/api/lessons/{lesson_id}")
async def delete_lesson(lesson_id: int):
    for i, lesson in enumerate(lessons_db):
        if lesson.id == lesson_id:
            del lessons_db[i]
            return {"message": f"Lesson {lesson_id} deleted successfully"}
    raise HTTPException(status_code=404, detail="Lesson not found")

if __name__ == "__main__":
    # Use debug mode in development
    uvicorn.run("main:app", host="0.0.0.0", port=8001, reload=config.DEBUG)
