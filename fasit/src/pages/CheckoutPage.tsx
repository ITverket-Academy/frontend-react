import { useAtom } from "jotai";
import { cartAtom } from "../components/cart/cartAtom";
import CheckoutExpectedDelivery from "../components/checkout/CheckoutExpectedDelivery";
import CheckoutProductCard from "../components/checkout/CheckoutProductCard";
import CheckoutTotalSum from "../components/checkout/CheckoutTotalSum";

const CheckoutPage = () => {
  const [cart] = useAtom(cartAtom);

  return (
    <main className="main checkout-container">
      <div className="checkout-list-container">
        <div className="checkout-list-cart">
          <h3 className="checkout-cart-title">Handlekurv {cart?.length}</h3>
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

      {cart.length > 0 && (
        <div className="checkout-expected-delivery">
          <CheckoutExpectedDelivery />
        </div>
      )}
    </main>
  );
};

export default CheckoutPage;
