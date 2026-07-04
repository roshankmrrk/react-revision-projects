import { useId, useState } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyOptions,
    CurrencyOption=[],
    selectCurrency = "usd",
    amountDisable=false,
    CurrencyDisable = false,
    onCurrencyChange,
    className =""
}) {
   
    const amountInputId = useId() 

    const searchCurrency = ()=>{
{<input className=""/>}
    }
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block" htmlFor="amountInputId">
                    {label}
                </label>
                <input
                    id="amountInputId"
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    edi
                    onClick={()=>{
                        searchCurrency();
                    }}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(String(e.target.value))} disabled={CurrencyDisable}

                    
                >
                   
                    {
                        CurrencyOption.map((currency)=>(
                            <option key={currency} value={currency}>{currency} </option>
                        ))
                    }
                    <input type="text" id="SearchCurrency" className="max-w-fit" />
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;


/*
import { useId, useState } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    CurrencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    CurrencyDisable = false,
    onCurrencyChange,
    className = ""
}) {

    const amountInputId = useId();

    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const filteredCurrencies = CurrencyOption.filter((currency) =>
        currency.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            
            
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                />
            </div>

            // {/* Currency Dropdown }
            <div className="w-1/2 relative text-right">
                <p className="text-black/40 mb-2">Currency Type</p>

                // { Selected Box }
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gray-100 px-2 py-1 rounded cursor-pointer"
                >
                    {selectCurrency.toUpperCase()}
                </div>

                // Dropdown }
                {isOpen && !CurrencyDisable && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                        
                        // { Search Input }
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-2 py-1 border-b outline-none"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        // { Currency List }
                        <div className="max-h-40 overflow-y-auto">
                            {filteredCurrencies.length > 0 ? (
                                filteredCurrencies.map((currency) => (
                                    <div
                                        key={currency}
                                        onClick={() => {
                                            onCurrencyChange(currency);
                                            setIsOpen(false);
                                            setSearch("");
                                        }}
                                        className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
                                    >
                                        {currency.toUpperCase()}
                                    </div>
                                ))
                            ) : (
                                <div className="p-2 text-gray-400">
                                    No currency found
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputBox;
*/