import { useState } from "react";

const Rate = 85;
function CurrencyConvert() {

    const [ammount, setAmmount] = useState(12);
    const [currency, setCurrency] = useState("USD");

    const convertedCurrency = currency === "USD" ? ammount * Rate : ammount / Rate;

    const toggleCurrency = () => {
        setCurrency(currency == "USD" ? "INR" : "USD");
    }

    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <h4>3️⃣ Currency Toggle Toggle between USD ↔ INR</h4>
                        <div className="col-lg-6 mb-4">
                            <input type="text" onChange={(e) => setAmmount(e.target.value) } value={ammount} className="form-control my-3" placeholder="enter ammount here...."/>
                            <p><b>{ currency === "USD" ? 
                            `${ammount} USD = Rs${convertedCurrency.toFixed(2)} ` : 
                            `${ammount} INR = $${convertedCurrency.toFixed(2)}`
                         }</b></p>
                            <button className="btn btn-success" onClick={toggleCurrency}>change to USD</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CurrencyConvert;