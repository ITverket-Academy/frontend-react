import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { cartAtom } from "../cart/cartAtom";
import { calculateTotalSum } from "../../utils/priceCalculations";

const CheckoutTotalSum = () => {
  const [cart] = useAtom(cartAtom);
  const navigate = useNavigate();
  const shipping = 40;

  const navigateToOrderConfirmation = () => {
    if (cart.length > 0) {
      navigate("/checkout/confirm");
    }
  };

  return (
    <div className="total-sum-container">
      <div className="checkout-total-sum-info">
        <p>Mellomsum</p>
        <p>{calculateTotalSum(cart)} kr</p>
      </div>
      <div className="checkout-shipping">
        <p>Frakt</p>
        <p>{shipping} kr</p>
      </div>

      <div>
        <div className="checkout-total-sum-price">
          <h5>Total sum (inkl. 25% mva.) </h5>
          <h5>{calculateTotalSum(cart) + shipping} kr</h5>
        </div>
        <button
          className={
            cart.length > 0 ? `checkout-button` : `checkout-button-gray`
          }
          onClick={navigateToOrderConfirmation}
        >
          TIL KASSEN
        </button>
      </div>
    </div>
  );
};

export default CheckoutTotalSum;
