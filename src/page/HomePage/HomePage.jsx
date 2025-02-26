// import
import Hero from "../../components/Hero/Hero";
import Gallery from "../../components/Gallery/Gallery";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Gallery selectedTag={selectedTag} showFiltered={showTags} />
    </>
  );
};
