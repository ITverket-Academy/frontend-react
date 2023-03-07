import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getProduct } from "../components/product/productQueries";
import Select from "../components/select/Select";
import truckIcon from "../assets/truck.svg";
import undoIcon from "../assets/undo.svg";
import { useParams } from "react-router-dom";
import { cartAtom, Size } from "../components/cart/cartAtom";
import { useAtom } from "jotai";

/*
🗨️ På denne siden skal vi vise et enkelt produkt, la brukeren velge størrelse og legge det til i handlekurven.
For å oppnå dette, må vi kunne vise brukeren det produktet han ønsker å se på. Dette kan vi gjøre ved å bruke id-er til å hente ut spesifikke produkter.
For å demonstrere, gå inn på denne siden: http://localhost:8000/product/1
Her vil vi se "Nike Sportswear - T-shirt - black/white"-produktet. Dette fikk vi til ved å søke opp produktet etter ID-en. ID-en hentet vi fra URL-en, som dere ser:
http://localhost:8000/product/1 <-- Her er ID-en 1. Hvis dere forsøker å bytte ut 1 med 2 eller 3, vil dere få andre produkter.

Dere tenker kanskje: Men hvor er søkeparameteret? Her benytter vi oss ikke av søkeparametre. Søkeparametre er fint å bruke når man kan søke på forskjellige ting, og vi ikke helt vet hva vi skal vise.
For eksempel, et søk kan ha flere parametre. I vårt eksempel brukte vi kun det brukeren søkte på, og la det i parameteret "q", men vi kunne også latt brukeren velge en kategori i tillegg. Da ville vi hatt to parametre, "q" og "c",
og URL-en ville sett slik ut: http://localhost:8000/search?q=nike&c=shoes - Det som er fint med å bruke søkeparametre, er at man kan bruke et eller flere, og de kan komme i hvilken som helst rekkefølge eller kombinasjon.
Den funksjonaliteten behøver vi derimot ikke når vi vet hva vi skal hente, og vi kan derfor lage en URL som ser litt ryddigere ut ved å bruke dynamic routes. I routeren vår har vi satt opp en route som ser slik ut: /product/:productId
Her sier vi at, når vi er på /product/, så er det som kommer neste en parameter av typen productId. Da kan vi bruke dette til å enkelt hente ut ID-en fra URL-en.

Oppgaven deres på denne siden blir derfor å hente produktet som brukeren har gått inn på, la han velge størrelse, og legge det til i handlekurven.
*/

// Array av størrelser vi selger.
const sizeOptions = ["XXL", "XL", "L", "M", "S", "XS"];

const ProductPage = () => {
  // 💡Vi kan hente ut id-en til produktet via useParams
  const params = useParams();

  // ⚒️ lag en state som holder hvilken størrelse brukeren har valgt.

  // 💡 ta i bruk cart-atomen som vi har laget på forhånd.
  // const [cart, setCart] = useAtom(cartAtom);

  // ⚒️ Fullfør funksjonaliteten i hooken under, slik at vi kan sette tittelen til tabben vår!
  // Filen til hooken finner du i app -> src -> hooks -> useTitle.ts.
  // Kommenter ut linjen under når du har fullført funkjsonaliteten.
  // const [ title, setTitle ] = useTitle();

  // 🗨️ Vi bruker productId-parameteret i URL-en vår til å hente riktig produkt.
  const { isLoading, isError, data } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(params.productId),
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>An error occured...</h1>;
  // ⚒️ Lag en return case i tilfellet vi ikke finner produktet.

  useEffect(() => {
    // ⚒️ Sett tittelen til tabben vår til navnet på produktet ved å bruke useTitle-hooken vår.
    
    // ⚒️ Sørg for at denne kun kjøres når produktet er lastet inn.
  }, []);

  const addToCart = () => {
    // ⚒️ Hvis brukeren ikke har valgt en størrelse, vil vi ikke kjøre resten av logikken i denne funksjonen.

    // ⚒️ Se om produktet allerede ligger i handlekurven.
    
    // ⚒️ Hvis produktet ligger i kurven, oppdaterer vi antall, hvis ikke, legger vi det til.
    
    // ⚒️ Oppdater handlekurven med den nye listen.
  };

  return (
    <main className="main container">
      <div className="product-page-row">
        {/*🧹 Fjern kommentaren under når du har klart å hente produktet. */}
        {/* <img className="product-page-img" src={product.image} /> */}
        <div>
          {/*🧹 Fjern kommentaren under når du har klart å hente produktet. */}
          {/* <div>
            <h1 className="title font-normal">{product.name}</h1>
            <h2 className="title">{product.details}</h2>
            <h3 className="subtitle">
              {product.price} kr <span className="font-light">inkl. mva.</span>
            </h3>
          </div> */}
          <div className="product-button-container">
            {/*⚒️ Fullfør funksjonaliteten til Select-komponenten under.*/}
            {/* 
            <Select
              onChange={(value) => setSize(value as Size)}
              value={size}
              options={sizeOptions}
            /> */}
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
