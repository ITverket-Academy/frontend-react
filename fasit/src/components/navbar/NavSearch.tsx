import searchIcon from "../../assets/search.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavSearch = () => {
  // Navigate-hooken er en hook som React Router har laget for oss, slik at navigering mellom sider blir enkelt og sømløst.
  const navigate = useNavigate();

  // Her bruker vi useState-hooken til å håndtere det brukeren skriver i søkefeltet.
  const [searchInput, setSearchInput] = useState("");

  /*
  Denne funksjonen tar imot et event fra input-feltet som inneholder verdien. Events er en viktig del av frontend-utvikling og React.
  Mye av funksjonalitet som er avhengig av brukerinput, er basert på events. I dette tilfellet har vi et "Input"-element, som triggres
  når brukeren skriver i søkefeltet. Vi må derfor gå inn i "currentTarget" på event-objektet og hente verdien der. Du kan lese mer om 
  events her: https://beta.reactjs.org/learn/adding-interactivity
  */
  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchInput(event.currentTarget.value);
  };

  /*
    Noen events har ekstra funksjonalitet som de kjører etter at de blir kalt på. Når man "submitter" en form, så vil den automatisk
    forsøke å laste inn siden på nytt. Dette er ikke alltid ønskelig, spesielt ikke når vi lager en "single page application".
    Derfor kjører vi "event.preventDefault()" for å forhindre at formen laster inn siden på nytt. 
    Du kan lese mer om dette her: https://beta.reactjs.org/learn/responding-to-events#preventing-default-behavior
   */
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/search?q=" + searchInput);
  };

  return (
    <form
      className="nav-search-container"
      // Vi sender inn onSubmit-funksjonen til form-elmentet. onSubmit-propertien har innebygd listener på "enter"-knappen, slik at den
      // kjøres når vi trykker enter.
      onSubmit={handleSubmit}
    >
      <img className="nav-search-icon" src={searchIcon} alt="Zoolando logo" />
      <input
        className="nav-search-input"
        type="text"
        placeholder="Søk"
        /* 
        Her, siden handleSearch funksjonen matcher nøyaktig med typen til onChange, kan vi bare skrive inn navnet til funksjonen,
        og react vil automatisk håndtere innsendingen av event-objektet. 
        Det er derfor viktig at vi ikke inkluderer parantesene når vi ikke spesifiserer parameteret.
        Vi kunne også skrevet det på en litt annerledes måte. Om istedenfor å sende hele eventet til handleSearch, så kunne vi heller tatt i mot 
        en enkel streng. Da kunne vi skrevet det slik:
        onChange={(event) => handleSearch(event.currentTarget.value)}
        */
        onChange={handleSearch}
      />
    </form>
  );
};

export default NavSearch;
