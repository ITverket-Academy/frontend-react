import searchIcon from "../../assets/search.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/*
🗨️ Denne komponten inneholder søkefeltet som vi ser i navbaren. Foreløpig gjør denne ingenting. Det skal vi endre på nå!
I dene siden skal vi benytte oss av React Router sin "navigate"-hook. Dette er en hook som react router har laget for oss,
slik at navigering mellom sider blir enkelt og sømløst. Den brukes ved å legge inn ruten man vil navigere til.
I dette tilfellet vil det være "/search?q=" etterfulgt av søket til brukeren.

Dere skal derfor lage en funksjon som tar imot det brukeren skriver i søkefeltet, og en funksjon som navigerer når brukeren trykker "enter".
*/

const NavSearch = () => {
  // 💡 Kommenter ut "navigate"-hooken til React Router for å kunne bruke den til å navigere til en ny side.
  // const navigate = useNavigate();

  // ⚒️ Bruk useState-hooken til React for å lage en state som håndterer det brukeren skriver i søkefeltet.

  // ⚒️ Gi denne funksjonen en parameter som React.FormEvent<HTMLInputElement>
  const handleSearch = () => {
    // ⚒️ Sett brukeren sin input til staten du laget ovenfor.
    // 💡 HINT: De fleste events som er av typen input, har en property som heter "currentTarget", som igjen har en property som heter "value".
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    /* 💡 Når man submitter et form på en nettside, vil den automatisk forsøke å laste inn en ny side. Siden vi lager en "single page application",
    er vi nødt til å forhindre denne oppførselen. Det gjør vi ved å bruke "event.preventDefault()". 
    Alle react-properties som starter med "on" vil sende en event til funksjonen som vi gir til den.
    */
    event.preventDefault();
    // ⚒️ Bytt ut inputen til brukeren med "myVariable" og fjern kommentaren under.
    // navigate("/search?q=" + myVariable);
  };

  return (
    <form className="nav-search-container" onSubmit={handleSubmit}>
      <img className="nav-search-icon" src={searchIcon} alt="Zoolando logo" />
      <input
        className="nav-search-input"
        type="text"
        placeholder="Søk"
        onChange={handleSearch}
      />
    </form>
  );
};

export default NavSearch;
