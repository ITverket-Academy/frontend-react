import { useAtomValue } from "jotai";
import { useState } from "react";
import { Link } from "react-router-dom";
import bagIcon from "../../assets/shopping-bag.svg";
import { cartAtom } from "./cartAtom";
import CartDropdown from "./CartDropdown";

const CartButton = () => {
  // ⚒️ Lag en state som sjekker om brukeren "hovrer" over handlekurv-ikonet.

  // Vi bruker cartAtom vi laget tidligere for å vise hvor mange items vi har i kurven.
  const cart = useAtomValue(cartAtom);

  return (
    <div
      className="cart"
      //⚒️ Implementer en funksjon som endrer hover state
      // 💡 HINT: Skriv "onMouse" og se hvilke autocomplete muligheter du får.
    >
      {cart.length > 0 && (
        <div className="cart-item-counter">{cart.length}</div>
      )}
      <Link to="checkout">
        <div className="nav-icon">
          <img src={bagIcon} alt="Shopping bag icon" />
        </div>
      </Link>
      {/*⚒️  Render komponenten <CartDropdown /> om brukeren hovrer over handlekurv-ikonet. */}
    </div>
  );
};

export default CartButton;
