import FilterIcon from "../../assets/images/Filter.svg?react";
import HomeIcon from "../../assets/images/Arrow.svg?react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = ({ handleFilterClick, headerIcon = false }) => {
  return (
    <>
      <nav className="nav">
        <h1 className="nav__header">
          <NavLink className="nav__link" to="/">
            Snaps
          </NavLink>
        </h1>
        {headerIcon ? (
          <NavLink to="/" className="nav__button ">
            <HomeIcon className="nav__icon nav__icon-home" />
            Home
          </NavLink>
        ) : (
          <button onClick={handleFilterClick} className="nav__button">
            Filters
            <FilterIcon className="nav__icon" />
          </button>
        )}
      </nav>
    </>
  );
};

export default Header;
