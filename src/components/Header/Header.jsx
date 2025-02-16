import FilterIcon from "../../assets/images/Filter.svg?react";
import "./Header.css";
// import "../styles/partials/button.css";
const Header = () => {
  return (
    <>
      <nav className="nav">
        <h1 className="nav__header">Snaps</h1>
        {/* <button>Filters {FilterIcon}</button> */}
        {/* <img src="./src/assets/images/Filter.svg" /> */}
        <button className="nav__button">
          Filter
          {/* <img className="nav__icon" src={FilterIcon} /> */}
          <FilterIcon className="nav__icon" />
        </button>
      </nav>
    </>
  );
};

export default Header;
