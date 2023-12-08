import { NavLink } from "react-router-dom";
import CategoryButton from "../../../components/Buttons/CategoryButton";

function Category() {
  return (
    <div className="category m-16 flex flex-row items-center justify-center gap-48 font-main">
      <div className="two">
        <NavLink to="/shoes">
          <div className="shoes-category w-[400px] h-[300px] bg-shoesBg bg-cover bg-no-repeat mb-4 relative cursor-pointer">
            <h3 className="bg-[#00000080] text-white w-full px-4 py-6 text-xl align-bottom absolute bottom-0">
              Shoes
            </h3>
            <CategoryButton />
          </div>
        </NavLink>
        <NavLink to="/headphones">
          <div className="headphone-category w-[400px] h-[300px] bg-headphoneBg bg-cover bg-no-repeat relative cursor-pointer">
            <h3 className="bg-[#00000080] text-white w-full px-4 py-6 text-xl align-bottom absolute bottom-0">
              Headphones
            </h3>
            <CategoryButton />
          </div>
        </NavLink>
      </div>
      <NavLink to="/kitchen">
        <div className="one kitchen-category w-[300px] h-[616px] bg-kitchenBg bg-cover bg-center bg-no-repeat relative cursor-pointer">
          <h3 className="bg-[#00000080] text-white w-full px-4 py-6 text-xl align-bottom absolute bottom-0">
            Kitchen & Home
          </h3>
          <CategoryButton />
        </div>
      </NavLink>
    </div>
  );
}

export default Category;
