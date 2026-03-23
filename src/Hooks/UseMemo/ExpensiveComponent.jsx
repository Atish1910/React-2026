import React, { useMemo, useState } from 'react';

const ExpensiveComponent = () => {
    const [count, setCOunt] = useState(0);
    const [input, setInput] = useState("");

    const expensiveCalculation = useMemo(() => {
        alert("counting expensive calsulation");
        let total = 0;
        for(let i = 0; i <= 10000; i++){
            total += 1;
        }
        return total;
    },[])
    return (
        <>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <h6>total calclation : {expensiveCalculation}</h6>
                    <p>{input} {count}</p>
                    <input type="text" className='form-control my-4' onChange={(e) => setInput(e.target.value)} placeholder='enter your text' />
                    <button className='btn btn-outline-primary'onClick={() => setCOunt(count + 1)} >increment</button>
                </div>
            </div>   
        </>
    );
};

export default ExpensiveComponent;