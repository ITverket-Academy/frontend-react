const OrderPaymentInformation = () => {
  return (
    <div>
      <div>
        <h1>Leveringsadresse</h1>
        <div className="order-user-info">
          <p>Ola Normann</p>
          <p>Adressegata 12A</p>
          <p>0172</p>
          <p>Norge</p>
        </div>
      </div>
      <div className="order-invoice-adress">
        <h1>Faktureringsadresse</h1>
        <p>Samme som leveringsadresse</p>
      </div>
      <div className="order-invoice-adress">
        <h1>Betalingsmåte</h1>
        <p>Vipps</p>
      </div>
    </div>
  );
};

export default OrderPaymentInformation;
