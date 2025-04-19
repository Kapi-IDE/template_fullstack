from fastapi.testclient import TestClient
import pytest
from main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to EduAI Coder API"}

def test_get_lessons():
    response = client.get("/api/lessons")
    assert response.status_code == 200
    lessons = response.json()
    assert len(lessons) >= 3  # We should have at least our initial 3 lessons
    
    # Check structure of returned lessons
    for lesson in lessons:
        assert "id" in lesson
        assert "title" in lesson
        assert "description" in lesson
        assert "difficulty" in lesson
    
def test_get_lesson():
    # Test getting a specific lesson
    response = client.get("/api/lessons/1")
    assert response.status_code == 200
    lesson = response.json()
    assert lesson["id"] == 1
    assert lesson["title"] == "Introduction to Python"
    assert "content" in lesson
    
def test_lesson_not_found():
    # Test getting a non-existent lesson
    response = client.get("/api/lessons/999")
    assert response.status_code == 404
    assert response.json()["detail"] == "Lesson not found"
    
def test_create_lesson():
    # Test creating a new lesson
    new_lesson = {
        "title": "Test Lesson",
        "description": "This is a test lesson",
        "difficulty": "Intermediate",
        "content": "# Test Content\n\nThis is test content for our lesson."
    }
    response = client.post("/api/lessons", json=new_lesson)
    assert response.status_code == 200
    created_lesson = response.json()
    assert created_lesson["title"] == "Test Lesson"
    assert created_lesson["description"] == "This is a test lesson"
    assert "id" in created_lesson
    
    # Verify it was added to the database
    all_lessons = client.get("/api/lessons").json()
    assert any(lesson["title"] == "Test Lesson" for lesson in all_lessons)

def test_update_lesson():
    # First create a lesson to update
    new_lesson = {
        "title": "Lesson to Update",
        "description": "This lesson will be updated",
        "difficulty": "Beginner",
        "content": "Initial content"
    }
    create_response = client.post("/api/lessons", json=new_lesson)
    lesson_id = create_response.json()["id"]
    
    # Now update the lesson
    updated_data = {
        "title": "Updated Lesson",
        "description": "This lesson has been updated",
        "difficulty": "Advanced",
        "content": "Updated content"
    }
    update_response = client.put(f"/api/lessons/{lesson_id}", json=updated_data)
    assert update_response.status_code == 200
    updated_lesson = update_response.json()
    assert updated_lesson["id"] == lesson_id
    assert updated_lesson["title"] == "Updated Lesson"
    assert updated_lesson["difficulty"] == "Advanced"
    
    # Verify it was updated in the database
    get_response = client.get(f"/api/lessons/{lesson_id}")
    assert get_response.status_code == 200
    assert get_response.json()["title"] == "Updated Lesson"

def test_delete_lesson():
    # First create a lesson to delete
    new_lesson = {
        "title": "Lesson to Delete",
        "description": "This lesson will be deleted",
        "difficulty": "Intermediate",
        "content": "Content to delete"
    }
    create_response = client.post("/api/lessons", json=new_lesson)
    lesson_id = create_response.json()["id"]
    
    # Now delete the lesson
    delete_response = client.delete(f"/api/lessons/{lesson_id}")
    assert delete_response.status_code == 200
    assert delete_response.json()["message"] == f"Lesson {lesson_id} deleted successfully"
    
    # Verify it was deleted
    get_response = client.get(f"/api/lessons/{lesson_id}")
    assert get_response.status_code == 404
