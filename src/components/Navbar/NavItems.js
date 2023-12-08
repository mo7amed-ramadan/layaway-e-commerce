import { NavLink } from "react-router-dom";

function NavItems() {
  return (
    <>
      <li className="list-none">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? "#8A6745" : "white",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="list-none">
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="list-none">
        <NavLink to="/contact">Contact us</NavLink>
      </li>
    </>
  );
}

export default NavItems;
