import ProductList from "../components/product/ProductList";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../components/product/productQueries";
import { Product } from "../components/cart/cartAtom";

/*
🗨️
  På denne siden, så skal vi vise brukeren søkeresultatene deres. Sluttproduktet vil se slik ut:
  http://localhost:8000/search?q=nike
  Her ser dere at vi navigerer til siden /search og benytter oss av søkeparameteret "q". Verdien til q er det brukeren har søkt på.
  Etter dere har sett på ferdige resultatet over, prøv deretter å endre nike til adidas i parameteret og trykk enter. 
  Da skal dere få nye resultater med adidas-produkter.

  Oppgaven deres på denne siden, blir da å hente ut søkeparameteret fra URLen, og vise produkter som matcher søket til brukeren.
*/

const SearchPage = () => {
  // 💡 Vi bruker useSearchParams for å hente ut søkeparametere fra URLen
  // const [searchParams] = useSearchParams();

  // ⚒️ Hent ut alle produkter ved å bruke React Query.

  // ⚒️ Fjern kommentaren på variabelen under. Deretter hent ut søket til brukeren fra URL-en ved å legge inn riktig parameter i variabelen.
  // const searchValue = searchParams.get("");

  const filteredItems = (): Product[] => {
    // ⚒️ Kommenter ut variabelen under. Bruk den til å splitt opp searchValue i en liste med søkeord
    // const searchTerms =

    // ⚒️ Bytt ut false med logikk som sørger for at produkt-listen din ikke er null, og at du har en liste med søkeord.
    if (false) {
      // 💡 Kommenter ut funksjonen under når du har fullført oppgavene ovenfor.
      // const filteredData = data.filter((item) => {
      //   return searchTerms.every((term) => {
      //     return Object.values(item).join("").toLowerCase().includes(term);
      //   });
      // });

      // ⚒️ Returner filteredData istedenfor en tom array.
      return [];
    }

    // Returner en liste med filtrerte produkter.
    return []; // 💡 Endre denne til å enten returnere enten alle produkter, eller et tomt array.
  };

  // ⚒️ Returner noe JSX som indikerer at siden laster
  // ⚒️ Returner noe JSX som indikerer at vi har fått en error

  return (
    <main className="main container">
      {/* <h1 className="mb-2">💡Vis til brukeren hva de har søkt etter, evt. vis "Our Products" hvis de ikke har søkt etter noe. </h1> */}
      {/*{data && <ProductList products={filteredItems()} />} */}
    </main>
  );
};

export default SearchPage;
