function CurrencyBox({
  fromCountry,
  toCountry,
  amount,
  convertedAmmount,
  currencyOptions,
  isFrom,
  onValueChanged,
  onFromChanged,
  onToChanged
}) {
  return (
    <>
      <div className="bg-slate-300 h-auto w-auto p-5 flex flex-row justify-center items-center gap-x-5 rounded-md shadow-sm">
        <input
          type="number"
          className="h-8 w-96 p-5 rounded-sm"
          placeholder="0"
          disabled={!isFrom}
          value={isFrom ? amount : convertedAmmount}
          onChange={(e) => onValueChanged && onValueChanged(Number(e.target.value))}
        ></input>
        <select className="p-2 rounded-md"
         onChange={onFromChanged ? (e) => onFromChanged && onFromChanged(e.target.value) : (e) => onToChanged && onToChanged(e.target.value)}>
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
              selected={
                (fromCountry == currency && isFrom) ||
                (toCountry == currency && !isFrom)
                  ? true
                  : false
              }
            >
              {currency}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default CurrencyBox;
