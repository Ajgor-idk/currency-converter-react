import { useEffect, useState } from "react";
import { createElem } from "../../Utils/createElem/createElem";
import { querySelect } from "../../Utils/querySelect/querySelect";

export const CurrencySelect = () => {
  const url = "http://api.nbp.pl/api/exchangerates/tables/c/last/";
  const currencyList = querySelect("#currencies");
  const [rates, setRates] = useState([])

  useEffect(() => {
    fetch(url)
      .then((repsonse) => repsonse.json())
      .then((data) => {
        console.log(data);
        setRates(data[0].rates)
        // data[0]?.rates.forEach(({ code, bid }) => {
        //   const option = createElem("option");
        //   option.innerText = code;
        //   option.setAttribute("value", bid);
        //   currencyList.appendChild(option);
        // });
      })
      .catch((err) => console.error(err));
  },[])
  console.log(rates);
  return (
    <select
      name="currencies"
      id="currencies"
      title="Select the currency you want to convert."
    >
      <option>Hello</option>
      {rates.forEach(({code, bid}) => {
        return(<option value={bid}>{code}</option>)
      })}
    </select>
  );
};
