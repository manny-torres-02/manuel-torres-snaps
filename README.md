# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project Requirements Checklist

## Functional Requirements

- [ ] **Routing**
  - [x] Two routes:
    - [x] Home page route displaying all photos with filtering
    - [ ] Individual photo route showing single photo + info
    - [ ] Dynamically set up photo ids 
- [ ] **Navigation**
  - [x] Clicking logo links to home page
  - [ ] Clicking photo on home page navigates to its individual page
- [ ] **Comments**
  - [ ] Submitted comments appear at top of comment list
  - [ ] Comments persist through page refresh

## Visual Design Requirements

- [ ] **Responsiveness**
  - [ ] Site responsive at/between breakpoints
  - [ ] Closely matches design mockups
- [ ] **SVG Handling**
  - [ ] Use inline SVGs for color-changing elements
  - [ ] Proper path/fill color changes in SVGs

## Implementation Requirements

- [ ] **Project Structure**
  - [x] Follows specified folder structure/naming conventions
  - [x] Uses provided assets
- [ ] **React Implementation**
  - [x] Uses multiple React function components
  - [x] Implements react-router-dom with multiple routes
- [ ] **Styling**
  - [ ] Uses SASS variables
  - [ ] Follows BEM class naming
  - [ ] Uses Flexbox for layouts
- [ ] **Data Handling**
  - [ ] Fetches data from mock API using axios
- [ ] **Forms**
  - [ ] Comment form uses controlled inputs
  - [ ] Form validation prevents submission with empty fields
