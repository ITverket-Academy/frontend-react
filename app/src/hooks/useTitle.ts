import { useEffect, useState } from "react";

type TitleProps = {
  primary?: string;
  secondary: string;
};

/*
🗨️ Hele React baserer seg på prinsippet rundt "hooks". Alt i react som er prefixed med "use" er en hook.
For eksempel useState, useEffect osv. 
Her skal vi lage vår egen hook som vi skal bruke til å endre navnet på fanen i nettleseren vår.
 */

const useTitle = () => {
  // ⚒️ Lag en state som holder et object med typen "TitleProps"

  // ⚒️ Bruk useEffect til å endre document.title hver gang staten du laget ovenfor endrer seg.
  useEffect(() => {
    // 💡 Vi vil gjerne separare primary og secondary tittel med | i fanen, og vise bare secondary om primary ikke er satt.
    // Kanskje vi kan sette "Zoolando" som default secondary verdi?

    // ⚒️ Denne effekten vil kun kjøres ved første render. Hva bør vi legge inn i arrayen her, slik at den kjøres hver gang staten endrer seg?
  }, []);

  // ⚒️ Endre på variablene under til å matche navnene på staten du laget ovenfor.
  // return [getter, setter] as const;
};

export default useTitle;
