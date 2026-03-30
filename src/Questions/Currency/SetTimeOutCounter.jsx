import React, { useState } from 'react';

const SetTimeOutCounter = () => {
    const [count, setCOunt] = useState(0);

    const onIncrement = () => {
        setTimeout(() => {
            setCOunt(count+1)
        }, 1000);
    }

    return (
        <>
            <div className="row py-5">
                <div className="col-lg-6">
                    <h6>create a 1 counter with setTimeOut & predict the output</h6>

                    <p>{count}</p>
                    <button className='btn btn-outline-success' onClick={onIncrement}>Count++</button>
                </div>
            </div>   
        </>
    );
};

export default SetTimeOutCounter;