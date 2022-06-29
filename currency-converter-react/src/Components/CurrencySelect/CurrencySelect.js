import { useEffect, useState } from "react";
import { v4 as uuid4 } from "uuid";

export const CurrencySelect = ({ setCurrencySelection, currencySelection }) => {
  const url = "https://api.nbp.pl/api/exchangerates/tables/c/last/";
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((repsonse) => repsonse.json())
      .then((data) => {
        console.log(data);
        setRates(data[0].rates);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <select
      name="currencies"
      id="currencies"
      title="Select the currency you want to convert."
      onChange={(event) => setCurrencySelection(event.target.value)}
      value={currencySelection}
    >
      <option value={null}></option>
      {rates.map(({ code, bid }) => {
        return (
          <option key={uuid4()} value={bid}>
            {code}
          </option>
        );
      })}
    </select>
  );
};
