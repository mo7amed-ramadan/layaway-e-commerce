function BuyButton(props) {
  return (
    <button
      className="w-full bg-button-color py-2 mt-8 text-center text-white font-semibold text-lg rounded-md capitalize hover:bg-[#654f9c] transition-all"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

export default BuyButton;
