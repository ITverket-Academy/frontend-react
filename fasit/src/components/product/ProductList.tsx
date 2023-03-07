import { Link } from "react-router-dom";
import { Product } from "../cart/cartAtom";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => {
  return (
    <ul className="list-unstyled product-row">
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>
            <ProductCard key={product.id} {...product} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
