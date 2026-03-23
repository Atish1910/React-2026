import React, { useState } from 'react';

const CurrencyConvert = () => {
    const rate = 85;
    const [amount, setAmount] = useState(1);
    const [currency, setCurrency] = useState("USD");

    const totalAmmount = currency == "USD" ?  rate *  amount : rate / amount;

    const handleOnClick = () => {
        setCurrency(currency == "USD" ? "INR" : "USD");
    }



    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <h4>create a currency converter</h4>
                        <div className="col-lg-6">
                            <input type="text" placeholder='enter your ammount' value={amount} onChange={(e) => setAmount(e.target.value)} className='form-control mb-3' />
                            {
                                currency == "USD" ? <p>converted currency from USD TO INR : <b>{totalAmmount}</b></p> : 
                                <p>converted currency from INR  TO USD : <b>{totalAmmount}</b></p>
                            }
                            <button className='btn btn-outline-success mb-3' onClick={handleOnClick}>convert to {currency}</button>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default CurrencyConvert;