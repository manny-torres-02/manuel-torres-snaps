import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import FilterTags from "./components/FilterTags/FilterTags";
function App() {
  return (
    <>
      <Header />
      <FilterTags />
      <Hero />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
