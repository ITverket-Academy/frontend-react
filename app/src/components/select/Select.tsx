import { useState } from "react";
import expandIcon from "../../assets/expand.svg";

/* 
🗨️ Det er ikke så¨veldig mye nytt å lære i denne komponenten, men noe dere kanskje kommer til å legge merke til, er 
typen til "onChange" i SelectProps. Den har en litt funny syntaks. 🥴
Det som skjer der, er at vi forteller TypeScript at onChange får inn en funksjon med parameteret "value" som er en string. 
"void" betyr akkurat det samme som i andre type språk, dvs. at ingenting blir returnert. Så denne syntaksen brukes når man skal 
sende en funksjon som er kan kalles, men ikke returner noe.
*/

type SelectProps = {
  options: string[];
  onChange: (value: string) => void;
  value?: string;
};

const Select = ({ options, value, onChange }: SelectProps) => {
  // ⚒️ lag en state som sjekker om dropdownen til denne selecten er åpen.

  return (
    <button
      className="select"
      // ⚒️ Håndter brukerens forsøk på å åpne dropdownen.
      // 💡 HINT: Dokumentasjonen til React forklarer hvordan man kan håndtere click-events: https://beta.reactjs.org/learn/responding-to-events
      // onClick={}
    >
      <div className="select-container">
        <span>{value ? value : "Velg størrelse"}</span>
        <div className="select-icon">
          <img
            src={expandIcon}
            // 💡 når du har laget en state som sjekker om dropdown er åpen, kan du fjerne kommentaren under, og erstatt "myVariable" med din state.
            // Dette vil da rotere pilen 180 grader når dropdownen er åpen.
            // style={{ transform: myVariable ? "rotate(180deg)" : "rotate(0deg)" }}
            alt="Expand icon"
          />
        </div>
      </div>
      {/*💡 når du har laget en state som sjekker om dropdown er åpen, kan du
      fjerne kommentaren under, og erstatt "myVariable" med din state.*/}
      {/* {myVariable && (
        <ul className="select-dropdown">
          {options.map((option) => (
            <li
              className={`select-item ${option === value ? "selected" : ""}`}
              onClick={() => onChange(option)}
              key={option}
            >
              {option}
            </li>
          ))}
        </ul>
      )} */}
    </button>
  );
};

export default Select;
