import { Header } from "./Components/Header/Header";
import { AmountInput } from "./Components/AmountInput/AmountInput";
import { CurrencySelect } from "./Components/CurrencySelect/CurrencySelect";
import { ConvertButton } from "./Components/ConvertButton/ConvertButton";
import { Outcome } from "./Components/Outcome/Outcome";

function App() {
  return (
    <>
      <Header />
      <main>
      <AmountInput />
      <CurrencySelect />
      <ConvertButton />
      </main>
      <Outcome text="hi"/>
    </>
  );
}

export default App;
