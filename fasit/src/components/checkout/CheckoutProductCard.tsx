import { useAtom } from "jotai";
import { useState } from "react";
import { calculateProductsWithQuantity } from "../../utils/priceCalculations";
import { cartAtom, CartItem } from "../cart/cartAtom";
import trash from "../../assets/trash.svg";

type Props = {
  product: CartItem;
};

// Denne siden håndterer produkter som ligger i cart. Her kan vi velge om vi vil endre på 
// antall vi ønsker å bestille av et produkt. Vi kan også fjerne et produkt fra handlekurven.
const CheckoutProductCard = ({ product }: Props) => {
  const [cart, setCart] = useAtom(cartAtom);

  //Denne funksjonen filterer bort produktet som inneholder produktId vi setter i parameteren.
  const handleRemoveProduct = (productId: number) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  // Denne funksjonen selecter automatisk tallet på inputfeltet når vi trykker på input feltet
  const handleOnFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.currentTarget.select();
  };

  // Her tar vi antall av en som kunden ønsker å bestille. Vi gjør den om til et tall og sørger for at
  // den ikke er under 1. Hvis den er det, så setter vi antall til å være 1. Til slutt har vi variabelen
  // newProduktList som lager en kopi av cart siden vi ikke direkte vil mutere array og endrer quantity til 
  // produktet til det brukeren har skrevet. Deretter setter vi den nye listen til å være cart med setCart.
  const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    let quantity = parseInt(event.target.value);

    // Hvis det ikke er et tall på inputfeltet eller inputen er mindre enn 1 setter vi verdien til å være 1. 
    // Bruker kan bare fjerne produktet hvis det er ønskelig 
    if(!quantity || quantity < 1) quantity = 1;
      
    // Vi vil ikke mutere eksisterende liste og kopier derfor listen istedet.
    let newProductList = cart.slice();

    newProductList.find((p) => p.id === product.id)!.quantity = quantity;

    setCart(newProductList);
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
          type="number"
          className="checkout-select-quantity"
          onChange={handleChangeQuantity}
          value={product.quantity}
          onFocus={handleOnFocus}
          min={1}
        />
        <p className="checkout-product-price">
          {calculateProductsWithQuantity(product.price, product.quantity)} kr
        </p>
      </div>
    </div>
  );
};

export default CheckoutProductCard;
