import FilterIcon from "../../assets/images/Filter.svg?react";
import "./Header.scss";

const Header = ({ handleFilterClick }) => {
  return (
    <>
      <nav className="nav">
        <h1 className="nav__header">Snaps</h1>
        <button onClick={handleFilterClick} className="nav__button">
          Filters
          <FilterIcon className="nav__icon" />
        </button>
      </nav>
    </>
  );
};

export default Header;
