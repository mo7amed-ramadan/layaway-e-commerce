import { useState } from "react";
import data from "../../../db/Data.json";
import ProductView from "./ProductView";
import { NavLink } from "react-router-dom";
function Products() {
  const [product, setProduct] = useState(data[0]);
  return (
    <div className="products my-24 mx-48 font-main">
      <h2 className="text-center text-6xl">
        All <span className="text-hover-color">Products</span>
      </h2>
      <div className="product-holder flex flex-row justify-between gap-5">
        {product.map((element) => {
          return (
            <NavLink to={`/product/${element.id}`} key={element.id}>
              <ProductView
                thumb={element.thumb}
                title={element.title}
                price={element.price}
                key={element.id}
              />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
