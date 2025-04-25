import React, { useId, useState } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  const [search, setSearch] = useState("");

  // Filter currency options based on search input
  const filteredCurrencies = currencyOptions.filter((currency) =>
    currency.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        {!currencyDisable && (
          <input
            type="text"
            placeholder="Search..."
            className="w-full mb-1 px-1 py-1 rounded bg-gray-50 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}

        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-full"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {filteredCurrencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
