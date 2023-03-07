import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { calculateTotalSum } from "../../utils/priceCalculations";
import { cartAtom } from "./cartAtom";

const maxStringLength = 20;

const CartDropdown = () => {
  const [cart, setCart] = useAtom(cartAtom);

  // Filtrer listen, slik at vi kun viser samme produkt én gang.
  const handleRemoveProduct = (productId: number) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  if (cart.length === 0) return null;

  return (
    <div className="cart-dropdown">
      <h2 className="cart-title">DIN HANDLEKURV</h2>
      <ul className="cart-list">
        {cart.map((product, i) => (
          <li className="cart-item" key={i}>
            <div className="cart-img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="cart-container">
              <div className="flex space-between">
                <p className="cart-text font-light">
                  {product.name.length > maxStringLength
                    ? `${product.name.slice(0, maxStringLength)}...`
                    : product.name}
                </p>
                <p className="cart-text">
                  <strong>{product.price * product.quantity} kr</strong>
                </p>
              </div>
              <p className="cart-text font-light">
                {product.details.length > maxStringLength
                  ? `${product.details.slice(0, maxStringLength)}...`
                  : product.details}
              </p>
              <p className="cart-text font-light">Antall: {product.quantity}</p>
              <button
                className="text-button cart-remove-button"
                onClick={() => handleRemoveProduct(product.id)}
              >
                Fjern vare
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex space-between w-100">
        <p>
          <strong>Total sum </strong>
          <small className="font-light">(inkl 25% mva.)</small>
        </p>
        <p>
          <strong>{calculateTotalSum(cart)} kr</strong>
        </p>
      </div>
      <Link to="checkout" className="black-button black-link mt-2">
        HANDLEKURV
      </Link>
    </div>
  );
};

export default CartDropdown;
