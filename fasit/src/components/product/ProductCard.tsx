import { Product } from "../cart/cartAtom";

const ProductCard = ({ name, details, price, image }: Product) => {
  return (
    <div className="product-card">
      <div>
        <img className="product-img" src={image} alt="Bilde av produkt" />
      </div>
      <div>
        <h3 className="product-text">{name}</h3>
        <h4 className="product-text font-light">{details}</h4>
        <p className="product-text mt-1">{price} kr</p>
      </div>
    </div>
  );
};

export default ProductCard;
