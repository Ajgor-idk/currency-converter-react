import { Header } from "./Components/Header/Header";
import { AmountInput } from "./Components/AmountInput/AmountInput";
import { CurrencySelect } from "./Components/CurrencySelect/CurrencySelect";
import { ConvertButton } from "./Components/ConvertButton/ConvertButton";
import { Outcome } from "./Components/Outcome/Outcome";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(0);
  const [currencySelection, setCurrencySelection] = useState("");
  const [outcome, setOutcome] = useState(0);
  const computeOutcome = () => {
    if (userInput && currencySelection) {
      setOutcome(userInput * currencySelection);
    } else {
      return;
    }
  };
  return (
    <>
      <Header />
      <main>
        <AmountInput setUserInput={setUserInput} />
        <CurrencySelect
          currencySelection={currencySelection}
          setCurrencySelection={setCurrencySelection}
        />
        <ConvertButton computeOutcome={computeOutcome} />
      </main>
      <Outcome outcome={outcome.toFixed(2)} />
    </>
  );
}

export default App;
