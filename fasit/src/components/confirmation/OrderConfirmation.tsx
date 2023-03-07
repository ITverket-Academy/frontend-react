import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cartAtom } from "../cart/cartAtom";
import { useAtom } from "jotai";
import { calculateTotalSum } from "../../utils/priceCalculations";
import OrderDeliveryInformation from "./OrderDeliveryInformation";
import OrderPaymentInformation from "./OrderPaymentInformation";

const OrderConfirmation = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [discount, setDiscount] = useState("");
  const [shipping, setShipping] = useState(40);
  const navigate = useNavigate();

  const confirmPurchase = () => {
    setCart([]);
    navigate("/checkout/confirmed");
  };

  const handleDiscountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(event.target.value);
  };

  const submitDiscount = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (discount === "billig") {
      setShipping(0);
    } else {
      setShipping(40);
    }
  };

  return (
    <main className="main order-container">
      <div className="order-header">
        <h1>Kontroller og send bestillingen</h1>
        <button onClick={() => confirmPurchase()} className="order-button">
          Send bestillingen og betal
        </button>
      </div>
      <div className="order-container-page">
        <OrderDeliveryInformation cart={cart} />
        <div className="delivery-adress-container">
          <OrderPaymentInformation />
          <div className="order-invoice-adress">
            <h1>Rabattkode eller gavekort (valgfritt)</h1>
            <form onSubmit={submitDiscount}>
              <input
                className="order-discount-input"
                placeholder="Løs inn din rabattkode"
                onChange={handleDiscountChange}
              />
            </form>
          </div>
          <div className="order-total-container">
            <div className="order-sum">
              <h2>Mellomsum</h2>
              <h2>{calculateTotalSum(cart)} kr</h2>
            </div>
            <div className="order-sum">
              <h2>Frakt</h2>
              <h2>{shipping} kr</h2>
            </div>
            <div className="order-sum">
              <h2>Total sum (inkl. 25% mva.)</h2>
              <h2>{calculateTotalSum(cart) + shipping} kr</h2>
            </div>
            <button
              onClick={() => confirmPurchase()}
              className="order-button-total"
            >
              Send bestillingen og betal
            </button>
          </div>
          <div className="order-small-text-div">
            <p className="order-small-text">
              Ved å bestille fra zoolando.no godtar du våre retningslinjer
              vedrørende Personvern, Generelle vilkår og Angrerett. Du bekrefter
              også at ditt kjøp er kun for privat bruk.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderConfirmation;
