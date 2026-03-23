import React from 'react';
import CounterReducer from './CounterReducer';

const UseReducerComponent = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <h4>Use Reducer All Questions</h4>
                    </div>
                    <CounterReducer></CounterReducer>
                    
                </div>
            </section>   
        </>
    );
};

export default UseReducerComponent;