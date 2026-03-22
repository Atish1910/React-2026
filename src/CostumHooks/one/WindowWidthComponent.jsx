import React from 'react';
import useWindowWidth from './useWindowWidth';

const WindowWidthComponent = () => {
    const width = useWindowWidth();
    return (
        <>
            <div className="row">
                <h4>23 : Create the Custom Hook Get the current window width</h4>
                <h6>current window width :{width} </h6>
            </div>   
        </>
    );
};

export default WindowWidthComponent;