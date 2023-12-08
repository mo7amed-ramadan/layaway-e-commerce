import NavItems from "./NavItems";
import Profile from "../../assets/profile.png";
import Cart from "../../assets/cart.svg";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar h-20 bg-main-color text-white flex flex-row items-center justify-between px-6 border-[#22333B] border-b">
      <h1 className="uppercase font-['poppins'] font-bold text-2xl">layaway</h1>
      <nav className="capitalize flex flex-row items-center gap-16 font-medium ">
        <NavItems />
      </nav>
      <div className="profile flex flex-row items-center gap-5">
        <NavLink to="/cart">
          <img src={Cart} alt="shop-cart" className="w-6 cursor-pointer" />
        </NavLink>
        <img src={Profile} alt="profile" className="w-7 cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
