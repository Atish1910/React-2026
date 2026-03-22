import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="row py-4">
                <h4>18. Create a counter component using useState ?</h4>
                <div className="col-lg-6">
                    <p>count : {count}</p>
                    <button className='btn btn-outline-danger' disabled={count == 0} onClick={() => setCount(count - 1)}>Decrement</button>
                    <button className='btn btn-danger'  disabled={count == 0} onClick={() => setCount(0)}>Reset</button>
                    <button className='btn btn-outline-success'onClick={() => setCount(count + 1)}>increment</button>
                </div>
            </div>
        </>
    );
};

export default Counter;