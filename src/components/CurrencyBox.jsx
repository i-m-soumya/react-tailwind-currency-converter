CurrencyBox.propTypes = {};

function CurrencyBox() {
  return (
    <>
      <div className="bg-slate-300 h-auto w-auto p-5 flex flex-row justify-center items-center gap-x-5 rounded-md shadow-sm">
        <input
          type="number"
          className="h-8 w-96 p-5 rounded-sm"
          placeholder="INR"
        ></input>
        <select>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
        </select>
      </div>
    </>
  );
}

export default CurrencyBox;
