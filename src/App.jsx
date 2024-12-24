import { useState } from "react";
import "./App.css";
import CurrencyBox from "./components/CurrencyBox";
import useGetCurrency from "./hooks/useGetCurrency";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmmount, setConvertedAmmount] = useState(0);

  const currencyInfo = useGetCurrency(from);

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmmount(amount * currencyInfo[to]);
  };
  function onValueChanged(newValue) {
    console.log("came", newValue);
    setAmount(newValue);
    convert();
  }
  function onToCurrencyChange(updatedToCountry) {
    setTo(updatedToCountry);
    convert();
  }
  function onFromCurrencyChange(updatedFromCountry) {
    setFrom(updatedFromCountry);
    convert();
  }

  return (
    <>
      <div className="bg-slate-800 h-lvh flex justify-center items-center">
        <div className="bg-slate-950 flex flex-col justify-center items-center gap-y-4 p-6 border border-gray-800 rounded-lg shadow pt-12 pb-12 hover:bg-slate-900">
          <h1 className="text-white text-2xl ">Currency Converter</h1>
          <CurrencyBox
            fromCountry={from}
            toCountry={to}
            ammount={amount}
            convertedAmmount={convertedAmmount}
            currencyOptions={options}
            isFrom={true}
            onValueChanged={(amount) => onValueChanged(amount)}
            onFromChanged={(country) => onFromCurrencyChange(country)}
          />
          <CurrencyBox
            fromCountry={from}
            toCountry={to}
            ammount={amount}
            convertedAmmount={convertedAmmount}
            currencyOptions={options}
            isFrom={false}
            onToChanged={(country) => onToCurrencyChange(country)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
