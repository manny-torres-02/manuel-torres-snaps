import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import FilterTags from "./components/FilterTags/FilterTags";
import HomePage from "./pages/HomePage/HomePage";
import PhotoPage from "./pages/PhotoPage/PhotoPage";

function App() {
  const [showTags, setShowTags] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  function handleFilterClick() {
    setShowTags(!showTags);

    if (showTags === true) {
      setSelectedTag(null);
    }
  }

  function selectTag() {}

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photos/:id" element={<PhotoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
