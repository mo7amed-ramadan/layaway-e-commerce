import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/action/cartAction";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BuyButton from "../../components/Buttons/BuyButton";
function ProductPage({ productData }) {
  const dispatch = useDispatch();
  const { productId } = useParams();

  if (!productData || productData.length === 0) {
    return <div>No product data available</div>;
  }

  const product = productData.find(
    (element) => element.id === parseInt(productId, 10)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-page font-main">
      <Navbar />
      <div className="flex flex-row justify-between items-start gap-5">
        <img
          src={product.thumb}
          alt={product.title}
          className="w-[40%] mt-11 ml-11 rounded-3xl"
        />
        <div className="content w-[60%] mt-11 mr-11">
          <h1 className="text-3xl font-bold capitalize">{product.title}</h1>
          <p className="my-5">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis ad nec
            sit euismod eleifend hendrerit vehicula erat. Montes praesent ante
            imperdiet montes hac dictum hac. Euismod aenean lacus aptent sem
            commodo consectetur mus sapien. Massa euismod urna mollis, curae
            mattis efficitur integer taciti. Eu rutrum condimentum, ante magna
            rutrum tellus. Sem integer amet sociosqu suscipit facilisi himenaeos
            tempor.
          </p>
          <p>Price: ${product.price}</p>
          <BuyButton
            title="Add to cart"
            onClick={() => handleAddToCart(product)}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
