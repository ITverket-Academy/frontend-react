import { useState } from "react";
import expandIcon from "../../assets/expand.svg";

type SelectProps = {
  options: string[];
  onChange: (value: string) => void;
  value?: string;
};

const Select = ({ options, value, onChange }: SelectProps) => {
  // Vi lager en isOpen-state for å sjekke om select-dropdownen skal vises.
  const [isOpen, setIsOpen] = useState(false);

  // Vi bruker handleClick til å sette isOpen til motsatt av hva den er nå.
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className="select" onClick={handleClick}>
      <div className="select-container">
        <span>{value ? value : "Velg størrelse"}</span>
        <div className="select-icon">
          <img
            src={expandIcon}
            // Vi endrer rotasjonen på pilen basert på isOpen.
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            alt="Expand icon"
          />
        </div>
      </div>
      {/* 
      Her rendrer vi kun <ul>-elementet om isOpen er true.
      */}
      {isOpen && (
        <ul className="select-dropdown">
          {options.map((option) => (
            <li
              // Om option er lik value, så legger vi til klasssen "selected", som gir den valgte verdien en grå outline.
              className={`select-item ${option === value ? "selected" : ""}`}
              onClick={() => onChange(option)}
              key={option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </button>
  );
};

export default Select;
