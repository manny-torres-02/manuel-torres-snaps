// import
import Hero from "../../components/Hero/Hero";
import FilterTags from "../../components/FilterTags/FilterTags";
import Gallery from "../../components/Gallery/Gallery";

const HomePage = () => {
  return (
    <>
      <div className="App-Wrapper">
        <FilterTags
          showTags={showTags}
          setShowTags={setShowTags}
          setSelectedTag={setSelectedTag}
          selectedTag={selectedTag}
          showFiltered={showTags}
        />
        <div className="Hero-Gallery-wrapper">
          <Hero />
          <Gallery selectedTag={selectedTag} showFiltered={showTags} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
