import { useEffect, useState } from "react";

type TitleProps = {
  primary?: string;
  secondary: string;
};

const useTitle = () => {
  // Vi bruker useState til å holde på verdien til tittelen vår.
  const [title, setTitle] = useState<TitleProps>({
    primary: "",
    secondary: "Zoolando",
  });

  useEffect(() => {
    // Vi sjekker om vi har en primary tittel, og hvis vi har det så bruker vi den, ellers bruker vi bare secondary.
    if (title.primary) document.title = `${title.primary} | ${title.secondary}`;
    else document.title = title.secondary;

    // Når vi legger til variabler i denne dependency-arrayen, vil useEffecten kjøres én gang ved første render, og
    // kjører på nytt KUN når denne variabelen endrer seg.
  }, [title]);

  // Vi asserter "as const" her, slik at TypeScript skjønner at vi alltid returnerer verdien i index 0, og setter-funksjonen i index 1.
  return [title, setTitle] as const;
};

export default useTitle;
