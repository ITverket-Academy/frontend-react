import ProductList from "../components/product/ProductList";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../components/product/productQueries";
import { Product } from "../components/cart/cartAtom";

const SearchPage = () => {
  // useSearchParams er en hook som React-Router tilbyr for å hente ut søkeparametere fra URLen på en enkel måte.
  const [searchParams] = useSearchParams();

  // Vi bruker queryet vårt som vi laget tidligere på HomePage for å hente ut alle produkter på denne siden også.
  const { isLoading, isError, data } = useQuery<Product[]>(["products"], () =>
    getProducts()
  );

  // Det første vi må gjøre i denne komponenten er å hente ut søkeparameteret fra URLen.
  // Parameteret vi bruker er "q". Dette kan man se i URL-en ved å på seksjonen som sier f.eks "q=nike".
  const searchValue = searchParams.get("q");

  // Vi blir nødt til å filtrere ut produkter som brukeren ikke har søkt etter, og derfor trenger vi å lage en funksjon
  // som skal gjøre dette arbeidet.
  const filteredItems = (): Product[] => {
    // Det er viktig å passe på at vi ikke filtrer bort ting pga. av stor eller liten bokstav i navnet,
    // så vi gjør om  hele søket til lower case og splitter hvert ord for seg selv, slik at vi får en
    // array av søkeord. Dette fordi vi søker på hvert enkelt ord, og om noen av ordene matcher,
    // så vil vi returnere dette produktet i resultatet.
    const searchTerms = searchValue?.toLowerCase()?.split(" ");

    // Det er viktig at hver gang vi skal jobbe med data og variabler, at vi sørger for at vi har det vi trenger,
    // slik at vi ikke opplever uforventede errors. Derfor sjekker vi først at både data og searchTerms eksiterer
    // før vi gjør noen operasjoner på dem.
    if (data && searchTerms) {
      // Denne funksjonen filtrerer data ved søkeordene, og vil returnere alle produkter som matcher søket.
      const filteredData = data.filter((item) => {
        return searchTerms.every((term) => {
          return Object.values(item).join("").toLowerCase().includes(term);
        });
      });

      return filteredData;
    }

    // Denne returnen vil kun bli hittet hvis enten data eller searchTerms ikke finnes.
    // Hvis data fortsatt finnes, returner vi bare data, som er alle produktene i butikken vår,
    // eller så returner vi bare en tom array, dvs. ingen produkter.
    return data || [];
  };

  // Vi bruker boolean-verdiene som React Query gir oss til å returnere annen HTML basert på om vi loader data eller har fått en error.
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;

  return (
    <main className="main container">
      {/* Vi bruker searchValue til å vise brukeren hva de har søkt på i tittelen på siden.
      Hvis de har kun trykket enter uten å faktisk søke på noe, så viser vi de "Our Products"
      med alle produktene våre, akkurat som om de skulle vært på HomePage.
      */}
      <h1 className="mb-2">{searchValue ? searchValue : "Our Products"}</h1>
      {data && <ProductList products={filteredItems()} />}
    </main>
  );
};

export default SearchPage;
