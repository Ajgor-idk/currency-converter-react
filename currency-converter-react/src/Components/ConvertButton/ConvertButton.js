import { querySelect } from "../../Utils/querySelect/querySelect";


export const ConvertButton = () => {
  const amount = querySelect("#amount");
  const currencyList = querySelect("#currencies");
  const convert = () => {
    const value = amount.value;
    const multiplier = currencyList.value;
  };

  return (
    <button onClick={convert} id="convert" title="Click to convert.">
      Convert
    </button>
  );
};
