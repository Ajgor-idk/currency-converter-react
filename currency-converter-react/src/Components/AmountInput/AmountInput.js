export const AmountInput = ({ setUserInput }) => {
  const preventMinus = (event) => {
    if (event.code === "Minus") {
      event.preventDefault();
    }
  };
  return (
    <input
      type="number"
      id="amount"
      min="0"
      placeholder="Provide the amount"
      title="Provide the amount of currency  you want to convert."
      onKeyDown={preventMinus}
      onChange={(event) => setUserInput(event.target.value)}
    />
  );
};
