import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getProduct } from "../components/product/productQueries";
import Select from "../components/select/Select";
import truckIcon from "../assets/truck.svg";
import undoIcon from "../assets/undo.svg";
import { useParams } from "react-router-dom";
import { cartAtom, Size } from "../components/cart/cartAtom";
import { useAtom } from "jotai";
import useTitle from "../hooks/useTitle";

// Array av størrelser vi selger.
const sizeOptions = ["XXL", "XL", "L", "M", "S", "XS"];

const ProductPage = () => {
  // Vi bruker hooken til React-Router for å hente ut id-en til produktet vi skal vise.
  const params = useParams();
  // Vi bruker denne til å holde på størrelsen som er valgt i select-komponenten
  const [size, setSize] = useState<Size | undefined>();
  // Vi bruker jotai for å hente ut og sette verdier i cartAtom
  const [cart, setCart] = useAtom(cartAtom);

  // Vi bruker custom hooken vi laget til å kunne sette tittel på siden.
  const [title, setTitle] = useTitle();

  // Vi bruker React-Query for å hente ut produktet fra API-et.
  const { isLoading, isError, data } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(params.productId),
  });

  // Vi lager en useEffect som vi vil kjøre etter at React-Query har lastet inn produktet. Deretter vil vi sette tittelen på fanen vår til navnet på produktet.
  useEffect(() => {
    if (data) {
      setTitle({ ...title, primary: data.name });
    }
    // Her sørger vi får at useEffect kun kjøres når isLoading endrer seg.
  }, [isLoading]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>An error occured...</h1>;

  // Hvis vi er ferdig med å loade, ikke har en error, og fortsatt ikke har data, så må vi fortelle brukeren at vi ikke fant produktet.
  if (!data) return <h1>Vi kunne ikke finne produktet</h1>;

  const addToCart = () => {
    // Vi vil ikke la brukeren legge til et produkt i handlekurven uten at de først har valgt størrelse.
    // Det å skrive en tom "return" er en enkel måte å bryte en funksjon på tidlig.
    if (!size) return;

    // Her ser vi om produktet allerede eksisterer i handlekurven.
    let existingProduct = cart.find((p) => p.id === data.id);
    // Hvis produktet ikke eksiterer, lager vi ny, og legger quantity til 0.
    if (!existingProduct) existingProduct = { ...data, quantity: 0 };

    // I React så er man oppfordret til å ikke mutere data. Vi lager derfor en ny liste med alle produkter utenom det produktet vi skal endre på.
    const newProductList = cart.filter((p) => p.id !== data.id);

    // Deretter oppdaterer vi carten vår med den nye listen, og legger til produktet vi endret på til slutt.
    setCart([
      ...newProductList,
      { ...existingProduct, size, quantity: existingProduct.quantity + 1 },
    ]);
  };

  return (
    <main className="main container">
      <div className="product-page-row">
        <img className="product-page-img" src={data.image} />
        <div>
          <div>
            <h1 className="title font-normal">{data.name}</h1>
            <h2 className="title">{data.details}</h2>
            <h3 className="subtitle">
              {data.price} kr <span className="font-light">inkl. mva.</span>
            </h3>
          </div>
          <div className="product-button-container">
            <Select
              onChange={(value) => setSize(value as Size)}
              value={size}
              options={sizeOptions}
            />
            <button className="black-button mt-1" onClick={addToCart}>
              Legg i handlekurven
            </button>
          </div>
          <div className="product-shipping">
            <div className="product-shipping-container">
              <div className="product-icon">
                <img src={truckIcon} alt="Shipping icon" />
              </div>
              <p className="font-bold">2-6 virkedager</p>
              <p className="font-light">Rask leveranse</p>
              <p className="font-bold">Gratis</p>
            </div>
            <div className="product-return">
              <div className="product-shipping-container row align-center">
                <div className="product-icon">
                  <img src={undoIcon} alt="undo icon" />
                </div>
                <p className="font-bold">100 dagers åpent kjøp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
