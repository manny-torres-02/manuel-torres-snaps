# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project Requirements Checklist

## Functional Requirements

- [x] **Routing**
  - [x] Two routes:
    - [x] Home page route displaying all photos with filtering
    - [x] Individual photo route showing single photo + info
    - [x] Dynamically set up photo ids 
- [x] **Navigation**
  - [x] Clicking logo links to home page
  - [x] Clicking photo on home page navigates to its individual page
- [x] **Comments**
  - [x] Submitted comments appear at top of comment list
  - [x] Comments persist through page refresh

## Visual Design Requirements

- [x] **Responsiveness**
  - [x] Site responsive at/between breakpoints
  - [x] Closely matches design mockups
- [x] **SVG Handling**
  - [x] Use inline SVGs for color-changing elements
  - [x] Proper path/fill color changes in SVGs

## Implementation Requirements

- [x] **Project Structure**
  - [x] Follows specified folder structure/naming conventions
  - [x] Uses provided assets
- [x] **React Implementation**
  - [x] Uses multiple React function components
  - [x] Implements react-router-dom with multiple routes
- [x] **Styling**
  - [x] Uses SASS variables
  - [x] Follows BEM class naming
  - [x] Uses Flexbox for layouts
- [x] **Data Handling**
  - [x] Fetches data from mock API using axios
- [x] **Forms**
  - [x] Comment form uses controlled inputs
  - [x] Form validation prevents submission with empty fields
