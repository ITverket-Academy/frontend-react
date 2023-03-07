import { Link } from "react-router-dom";

const OrderConfirmed = () => {
  return (
    <div className="order-confirmed">
      <h1>Bestillingen er nå på vei til deg 😃</h1>
      <Link to={"/"} className="back-to-homepage">
        Tilbake til forsiden
      </Link>
    </div>
  );
};

export default OrderConfirmed;
