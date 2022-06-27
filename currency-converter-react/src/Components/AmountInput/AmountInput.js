export const AmountInput = ({ setUserInput }) => {
  return (
    <input
      type="number"
      id="amount"
      min="0"
      placeholder="Provide the amount"
      title="Provide the amount of currency  you want to convert."
      onChange={(event) => setUserInput(event.target.value)}
    />
  );
};
