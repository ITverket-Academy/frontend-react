import { useAtom } from "jotai";
import { useState } from "react";
import { calculateProductsWithQuantity } from "../../utils/priceCalculations";
import { cartAtom, CartItem } from "../cart/cartAtom";
import trash from "../../assets/trash.svg";

/*
 🗨️ På denne siden skal vi lage metoden for at kunden skal kunne endre antall eksemplarer av produktet brukeren vil bestille. Her knytter vi input feltet med handleChangeQuantity og bruker inputen fra event til å sette quantity til produktet. Husk at denne endringen må skje i cart. 
*/

type Props = {
  product: CartItem;
};

const CheckoutProductCard = ({ product }: Props) => {
  const [cart, setCart] = useAtom(cartAtom);

  const handleRemoveProduct = (productId: number) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    // ⚒️ Sørg for at event inputen som kommer inn er et tall

    // ⚒️ Sørg for at produktets quantity ikke kan være mindre enn 1

    // ⚒️ Oppdater produktet med ny quantity

    // ⚒️ Oppdater carten med endringen i produktet. Husk å ikke mutere den eksisterende listen med produktet
  };

  return (
    <div className="checkout-product-card">
      <div className="checkout-product-image-text">
        <div>
          <img className="checkout-product-cart-image" src={product.image} />
        </div>
        <div className="checkout-product-cart-info">
          <p className="checkout-product-details-text-name">{product.name}</p>
          <p className="checkout-product-details-text">{product.details}</p>
          <p className="checkout-product-details-text">
            Størrelse: {product.size}
          </p>
          <button
            className="checkout-remove-product"
            onClick={() => handleRemoveProduct(product.id)}
          >
            <div className="checkout-remove-container">
              <img className="checkout-trash" src={trash} />
              <p>Fjern</p>
            </div>
          </button>
        </div>
      </div>
      <div className="checkout-quanitity-price">
        <input
          type="text"
          className="checkout-select-quantity"
          onChange={handleChangeQuantity}
          defaultValue={product.quantity}
        />
        <p className="checkout-product-price">
          {calculateProductsWithQuantity(product.price, product.quantity)} kr
        </p>
      </div>
    </div>
  );
};

export default CheckoutProductCard;
