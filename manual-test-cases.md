# EduAI Coder - Manual Test Cases

This document outlines manual test cases for the EduAI Coder application. These tests should be performed regularly to ensure the application functions correctly across different browsers and devices.

## Table of Contents
1. [Navigation and UI Tests](#navigation-and-ui-tests)
2. [Functionality Tests](#functionality-tests)
3. [Responsive Design Tests](#responsive-design-tests)
4. [Performance Tests](#performance-tests)
5. [Accessibility Tests](#accessibility-tests)
6. [Browser Compatibility Tests](#browser-compatibility-tests)

---

## Navigation and UI Tests

### TC-NAV-001: Homepage Navigation
**Description:** Verify that the homepage loads correctly and all UI elements are visible.

**Steps:**
1. Navigate to the homepage (http://localhost:3000/)
2. Verify the navbar is visible
3. Verify the welcome message is displayed
4. Verify the "Explore Lessons" button is visible
5. Verify the footer is visible

**Expected Result:** All UI elements are visible and properly styled.

### TC-NAV-002: Navbar Navigation
**Description:** Verify that all navbar links work correctly.

**Steps:**
1. Navigate to the homepage
2. Click on the "Home" link in the navbar
3. Verify you remain on the homepage
4. Click on the "Lessons" link in the navbar
5. Verify you are redirected to the lessons page
6. Click on the "About" link in the navbar
7. Verify you are redirected to the about page
8. Click on the "EduAI Coder" logo in the navbar
9. Verify you are redirected to the homepage

**Expected Result:** All navbar links navigate to the correct pages.

### TC-NAV-003: Explore Lessons Button
**Description:** Verify that the "Explore Lessons" button on the homepage works correctly.

**Steps:**
1. Navigate to the homepage
2. Click on the "Explore Lessons" button
3. Verify you are redirected to the lessons page

**Expected Result:** The button navigates to the lessons page.

---

## Functionality Tests

### TC-FUNC-001: Lessons Page Loading
**Description:** Verify that the lessons page loads correctly and displays lessons.

**Steps:**
1. Navigate to the lessons page (http://localhost:3000/lessons)
2. Verify the page title "Available Lessons" is visible
3. Verify that lesson cards are displayed
4. Verify that each lesson card shows a title, description, and difficulty level

**Expected Result:** The lessons page loads correctly and displays lesson cards with appropriate information.

### TC-FUNC-002: Lesson Detail Navigation
**Description:** Verify that clicking on a lesson card navigates to the lesson detail page.

**Steps:**
1. Navigate to the lessons page
2. Click on any lesson card
3. Verify you are redirected to the lesson detail page
4. Verify the lesson title is displayed
5. Verify the lesson content is displayed

**Expected Result:** Clicking on a lesson card navigates to the correct lesson detail page with appropriate content.

### TC-FUNC-003: About Page Content
**Description:** Verify that the about page loads correctly and displays all sections.

**Steps:**
1. Navigate to the about page (http://localhost:3000/about)
2. Verify the page title "About EduAI Coder" is visible
3. Verify the "Our Mission" section is visible
4. Verify the "How It Works" section is visible
5. Verify the "Our Technology Stack" section is visible

**Expected Result:** The about page loads correctly and displays all sections with appropriate content.

---

## Responsive Design Tests

### TC-RESP-001: Mobile View - Homepage
**Description:** Verify that the homepage displays correctly on mobile devices.

**Steps:**
1. Open the browser's developer tools
2. Set the viewport to a mobile device size (e.g., 375x667 for iPhone SE)
3. Navigate to the homepage
4. Verify that all elements are properly sized and positioned
5. Verify that the navbar collapses into a hamburger menu
6. Click on the hamburger menu and verify that all navigation links are accessible

**Expected Result:** The homepage is responsive and displays correctly on mobile devices.

### TC-RESP-002: Tablet View - Lessons Page
**Description:** Verify that the lessons page displays correctly on tablet devices.

**Steps:**
1. Open the browser's developer tools
2. Set the viewport to a tablet device size (e.g., 768x1024 for iPad)
3. Navigate to the lessons page
4. Verify that lesson cards are properly sized and positioned
5. Verify that the grid layout adjusts appropriately

**Expected Result:** The lessons page is responsive and displays correctly on tablet devices.

### TC-RESP-003: Desktop View - About Page
**Description:** Verify that the about page displays correctly on desktop devices.

**Steps:**
1. Open the browser's developer tools
2. Set the viewport to a desktop size (e.g., 1920x1080)
3. Navigate to the about page
4. Verify that all sections are properly sized and positioned

**Expected Result:** The about page is responsive and displays correctly on desktop devices.

---

## Performance Tests

### TC-PERF-001: Page Load Time - Homepage
**Description:** Verify that the homepage loads within an acceptable time frame.

**Steps:**
1. Open the browser's developer tools
2. Navigate to the Network tab
3. Clear the network log
4. Navigate to the homepage
5. Observe the total load time and size

**Expected Result:** The homepage loads in under 3 seconds on a standard broadband connection.

### TC-PERF-002: Page Load Time - Lessons Page
**Description:** Verify that the lessons page loads within an acceptable time frame.

**Steps:**
1. Open the browser's developer tools
2. Navigate to the Network tab
3. Clear the network log
4. Navigate to the lessons page
5. Observe the total load time and size

**Expected Result:** The lessons page loads in under 3 seconds on a standard broadband connection.

---

## Accessibility Tests

### TC-ACC-001: Keyboard Navigation
**Description:** Verify that the application can be navigated using only the keyboard.

**Steps:**
1. Navigate to the homepage
2. Use the Tab key to navigate through all interactive elements
3. Verify that the focus indicator is visible
4. Use Enter to activate links and buttons
5. Navigate to different pages using only the keyboard

**Expected Result:** All interactive elements can be accessed and activated using only the keyboard.

### TC-ACC-002: Screen Reader Compatibility
**Description:** Verify that the application is compatible with screen readers.

**Steps:**
1. Enable a screen reader (e.g., VoiceOver on Mac, NVDA on Windows)
2. Navigate to the homepage
3. Navigate through the application using the screen reader
4. Verify that all content is properly announced

**Expected Result:** All content is properly announced by the screen reader.

---

## Browser Compatibility Tests

### TC-COMP-001: Chrome Browser Compatibility
**Description:** Verify that the application works correctly in Chrome.

**Steps:**
1. Open the application in Chrome
2. Navigate through all pages
3. Verify that all functionality works as expected

**Expected Result:** The application works correctly in Chrome.

### TC-COMP-002: Firefox Browser Compatibility
**Description:** Verify that the application works correctly in Firefox.

**Steps:**
1. Open the application in Firefox
2. Navigate through all pages
3. Verify that all functionality works as expected

**Expected Result:** The application works correctly in Firefox.

### TC-COMP-003: Safari Browser Compatibility
**Description:** Verify that the application works correctly in Safari.

**Steps:**
1. Open the application in Safari
2. Navigate through all pages
3. Verify that all functionality works as expected

**Expected Result:** The application works correctly in Safari.

### TC-COMP-004: Edge Browser Compatibility
**Description:** Verify that the application works correctly in Edge.

**Steps:**
1. Open the application in Edge
2. Navigate through all pages
3. Verify that all functionality works as expected

**Expected Result:** The application works correctly in Edge.

---

## Test Execution Checklist

| Test Case ID | Tester | Date | Status | Comments |
|--------------|--------|------|--------|----------|
| TC-NAV-001   |        |      |        |          |
| TC-NAV-002   |        |      |        |          |
| TC-NAV-003   |        |      |        |          |
| TC-FUNC-001  |        |      |        |          |
| TC-FUNC-002  |        |      |        |          |
| TC-FUNC-003  |        |      |        |          |
| TC-RESP-001  |        |      |        |          |
| TC-RESP-002  |        |      |        |          |
| TC-RESP-003  |        |      |        |          |
| TC-PERF-001  |        |      |        |          |
| TC-PERF-002  |        |      |        |          |
| TC-ACC-001   |        |      |        |          |
| TC-ACC-002   |        |      |        |          |
| TC-COMP-001  |        |      |        |          |
| TC-COMP-002  |        |      |        |          |
| TC-COMP-003  |        |      |        |          |
| TC-COMP-004  |        |      |        |          |
