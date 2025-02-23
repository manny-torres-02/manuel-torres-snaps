import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tags from "./components/Tags/Tags";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import FilterTags from "./components/FilterTags/FilterTags";

function App() {
  const [showTags, setShowTags] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  // const [tag, setTag] = useState()

  function handleFilterClick() {
    setShowTags(!showTags);
    console.log("test");
  }

  function selectTag() {}
  // filterClick();
  // console.log("test");
  return (
    <>
      <Header handleFilterClick={handleFilterClick} />
      <div className="App-Wrapper">
        <FilterTags
          showTags={showTags}
          setShowTags={setShowTags}
          setSelectedTag={setSelectedTag}
          selectedTag={selectedTag}
        />
        <div>
          <Hero />
          <Gallery selectedTag={selectedTag} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
