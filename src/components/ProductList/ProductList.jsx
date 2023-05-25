import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
  .filter(product => product.category === category.id)
  .map(product => (
    <div className="Product" key={product.id}>
      <div className="card-top">
        <a href="#" className="card-img">
      <img src={product.picture} alt={product.name} />
      </a>
      <Link className="card-title" to={"/product/" + product.path}>
        {product.name}
      </Link>
      <AddToCart product={product} />
      <DeleteProduct product={product} />
    </div>
    </div>
  ));

  return (
    <div className="ProductList">
      {output}
      <AddProduct category={category} />
    </div>
  );
}