import React from 'react';

const ChildCallback = React.memo(({handleOnClick}) => {

    console.log("child Re-render");
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <button className='btn btn-success' onClick={handleOnClick}>click me</button>
                </div>
            </div>   
        </>
    );
});

export default ChildCallback;