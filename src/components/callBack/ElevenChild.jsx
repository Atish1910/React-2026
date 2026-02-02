import React from 'react';

const ElevenChild = ({handleOnChange, data}) => {
    return (
        <>
         <p>{data}</p>
         <div className="">
            <button className='btn btn-primary' onClick={() => handleOnChange("Atishhh k")}>Change Name</button>   
         </div>
        </>
    );
};

export default ElevenChild;