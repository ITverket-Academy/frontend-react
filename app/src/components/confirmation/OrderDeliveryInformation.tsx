import { CartItem } from '../cart/cartAtom'
import OrderConfirmationCard from './OrderConfirmationCard'
import info from "../../assets/info.svg";

type Props = {
    cart: CartItem[]
}

const OrderDeliveryInformation = ({cart}: Props) => {
  return (
    <div>
    <div className="order-delivery">
      <h1>Leveringsinformasjon</h1>
      <div className="order-delivery-information">
        <input className="order-radio" type={"radio"} defaultChecked />

        <div className="order-info-text">
          <h5>Ti, 28.02. - Ma, 06.03.</h5>
          <p>Standardforsendelse</p>
          <h5>25,00 Kr</h5>
        </div>
      </div>
      <div className="order-kolli-info">
        <img src={info} />
        <p>Du vil motta denne pakken i flere kolli</p>
      </div>
    </div>

    <div className="order-items">
      <h1>Bestilling</h1>
    </div>
    <div>
      {cart &&
        cart.map((item) => (
          <OrderConfirmationCard key={item.id} product={item} />
        ))}
    </div>
  </div>
  )
}

export default OrderDeliveryInformation;