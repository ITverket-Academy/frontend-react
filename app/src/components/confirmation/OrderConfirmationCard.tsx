import { CartItem } from "../cart/cartAtom";
import { calculateProductsWithQuantity } from "../../utils/priceCalculations";

type Props = {
  product: CartItem;
};

const OrderConfirmationCard = ({ product }: Props) => {
  return (
    <div className="order-card-container">
      <img className="order-card-img" src={product.image} />

      <div>
        <h1>{product.name}</h1>
        <p className="checkout-product-details-text">{product.details}</p>
        <p className="checkout-product-details-text">Størrelse: {product.size}</p>
        <p className="checkout-product-details-text">Antall: {product.quantity}</p>
        <h1 className="order-price-det">
          {calculateProductsWithQuantity(product.price, product.quantity)} kr
        </h1>
      </div>
    </div>
  );
};

export default OrderConfirmationCard;
