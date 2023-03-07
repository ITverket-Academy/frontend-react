import { useAtomValue } from "jotai";
import { useState } from "react";
import { Link } from "react-router-dom";
import bagIcon from "../../assets/shopping-bag.svg";
import { cartAtom } from "./cartAtom";
import CartDropdown from "./CartDropdown";

const CartButton = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cart = useAtomValue(cartAtom);

  return (
    <div
      className="cart"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {cart.length > 0 && (
        <div className="cart-item-counter">{cart.length}</div>
      )}
      <Link to="checkout">
        <div className="nav-icon">
          <img src={bagIcon} alt="Shopping bag icon" />
        </div>
      </Link>
      {isHovering && <CartDropdown />}
    </div>
  );
};

export default CartButton;
