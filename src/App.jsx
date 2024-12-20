import "./App.css";
import CurrencyBox from "./components/CurrencyBox";

function App() {
  return (
    <>
      <div className="bg-slate-800 h-lvh flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center gap-y-4 bg-transparent p-6 border border-gray-800 rounded-lg shadow bg-slate-950 pt-12 pb-12 hover:bg-slate-900">
          <h1 className="text-white text-xl ">Currency Converter</h1>
          <CurrencyBox />
          <button className="bg-slate-600 hover:bg-slate-500 text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded">
            Convert
          </button>
          <CurrencyBox />
        </div>
      </div>
    </>
  );
}

export default App;
