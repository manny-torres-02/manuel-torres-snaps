import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import FilterTags from "./components/FilterTags/FilterTags";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [showTags, setShowTags] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  function handleFilterClick() {
    setShowTags(!showTags);

    if (showTags === true) {
      setSelectedTag(null);
    }
    console.log("test");
  }

  function selectTag() {}

  return (
    <>
      <Header handleFilterClick={handleFilterClick} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>

      <div className="App-Wrapper">
        <FilterTags
          showTags={showTags}
          setShowTags={setShowTags}
          setSelectedTag={setSelectedTag}
          selectedTag={selectedTag}
          showFiltered={showTags}
        />
        <div className="Hero-Gallery-wrapper">
          {/* <Hero /> */}
          <Gallery selectedTag={selectedTag} showFiltered={showTags} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
