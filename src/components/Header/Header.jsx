import FilterIcon from "../../assets/images/Filter.svg";

const Header = () => {
  return (
    <>
      <nav>
        <h1>Snaps</h1>
        {/* <button>Filters {FilterIcon}</button> */}
        {/* <img src="./src/assets/images/Filter.svg" /> */}
        <img src={FilterIcon} />
      </nav>
    </>
  );
};

export default Header;
