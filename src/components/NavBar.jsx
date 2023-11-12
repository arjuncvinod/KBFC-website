import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [active, setActive] = useState(false);
  const [cls, setCls] = useState("inactive");

  function openNav() {
    setActive(true);
    setCls("Active");
  }
  function closeNav() {
    setActive(false);
    setCls("inactive");
  }
  return (
    <nav>
      <a href="/">
        <img src="/images/498.webp" alt="" />
      </a>
      {/* <ul style={{ width: `${width}` }}> */}
      <ul className={cls}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/squad">Squad</NavLink>
        </li>
        <li>
          <NavLink to="/photos">Photos</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      {active ? (
        <button className="menu-container" onClick={closeNav}>
          <CloseIcon className="menu close" />
        </button>
      ) : (
        <button className="menu-container" onClick={openNav}>
          <MenuIcon className="menu" />
        </button>
      )}
    </nav>
  );
}
export default NavBar;