import BuyButton from "../../../components/Buttons/BuyButton";

function ProductView(props) {
  return (
    <div className="product-view my-14 w-[350px]" key={props.key}>
      <div className="product-image">
        <img
          src={props.thumb}
          alt="headphone"
          className="rounded-t-3xl w-[350px]"
        />
      </div>
      <div className="product-content py-2 px-3 shadow-bt rounded-b-3xl">
        <div className="main-content flex flex-row items-center justify-between">
          <h4 className="text-xl font-semibold">{props.title}</h4>
          <span className="text-lg font-semibold">{props.price}$</span>
        </div>
        <div className="rate"></div>
        <BuyButton title="Proceed to buy" />
      </div>
    </div>
  );
}

export default ProductView;
