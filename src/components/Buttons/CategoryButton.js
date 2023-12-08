import Arrow from "../../assets/arrow.svg";
function CategoryButton() {
  return (
    <div className="category-button bg-white w-fit rounded-full absolute right-[-25px] top-[42%] shadow-3xl cursor-pointer opacity-0 transition-all">
      <img src={Arrow} alt="arrow" className="w-12 p-5 h-[50px]" />
    </div>
  );
}

export default CategoryButton;
