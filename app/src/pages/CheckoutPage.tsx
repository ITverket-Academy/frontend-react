import { useAtom } from "jotai";
import { cartAtom } from "../components/cart/cartAtom";
import CheckoutExpectedDelivery from "../components/checkout/CheckoutExpectedDelivery";
import CheckoutProductCard from "../components/checkout/CheckoutProductCard";
import CheckoutTotalSum from "../components/checkout/CheckoutTotalSum";

/* 
  🗨️ Denne siden viser handlekurven. Målet med oppgavene her er å prøve seg litt på jsx. Her vil du bruke 
  conditional rendering for å vise deler av siden basert på statements. Vi vil også bruke javascript på siden
  ved å rendre hvor mange produkter som ligger i handlekurven
*/
const CheckoutPage = () => {
  const [cart] = useAtom(cartAtom);

  return (
    <main className="main checkout-container">
      <div className="checkout-list-container">
        <div className="checkout-list-cart">
          {/* 
          Hvordan ville du vist kunden hvor mange varer du har i handlekurven? 

          ⚒️ Legg dette som et tall ved siden av "Handlekurv" i h3 elementet
          */}
          <h3 className="checkout-cart-title">Handlekurv</h3>
          {cart &&
            cart.map((item) => (
              <CheckoutProductCard key={item.id} product={item} />
            ))}
        </div>
        <div className="checkout-list-total">
          <h3 className="checkout-sum-title">Total sum</h3>
          <CheckoutTotalSum />
        </div>
      </div>

      {/*
      💡 Vi kan bruke conditional rendering for å velge om en komponent eller element skal vises basert på betingelse satt i koden.
          https://beta.reactjs.org/learn/conditional-rendering#conditional-ternary-operator--

      ⚒️ Gjør en conditional render på CheckoutExpectedDelivery under. Den skal kun være synlig dersom det ligger minst et produkt i handlekurven. 
      */}

      {/* <div className="checkout-expected-delivery">
        <CheckoutExpectedDelivery />
      </div> */}
    </main>
  );
};

export default CheckoutPage;
