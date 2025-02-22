import FilterIcon from "../../assets/images/Filter.svg?react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="nav">
        <h1 className="nav__header">Snaps</h1>
        <button className="nav__button">
          Filter
          <FilterIcon className="nav__icon" />
        </button>
      </nav>
    </>
  );
};

export default Header;
