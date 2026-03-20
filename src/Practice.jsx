import React, { useState } from 'react';

const Practice = () => {
    const Rate = 85;
    
    const [amount, setAmount] = useState(1);
    const [currency, setCurrency] = useState("USD");
    
    const convertCurrency = currency == "USD" ? Rate * amount : Rate / amount;

    const toggleCurrency = () => {
        setCurrency(currency == "USD" ? "INR" : "USD");
    };
    

    return (
        <>
         <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 pt-4">
                        <form action="">
                            <input type="text" className='form-control mb-3' onChange={(e) => toggleCurrency(e.target.value)}  value={amount} placeholder='enter your ammount' />
                            <p>usd : 1 = inr : 80</p>
                            <button className='btn btn-outline-success'>inr to usd</button>
                        </form>
                    </div>
                </div>
                </div>
            </section>   
        </>
    );
};

export default Practice;