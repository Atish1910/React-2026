import React, { useRef, useState } from 'react';

const DisplayInput = () => {
    const [data, setData] = useState("atish kamble");

    const inputRef = useRef(null);
    const displayRef = useRef(null);

    const handleOnChange = () => {
        displayRef.current.innerText = inputRef.current.value;
    }
    
    return (
        <>
            <section>
                <div className="container">
                    <div className="row py-4">
                        <h4>5 : how to display data enter by user in anather textbox</h4>
                        <div className="col-6">
                            <h6>useSTate</h6>
                                <input type="text"  className='form-control mb-3' onChange={(e) => setData(e.target.value)} placeholder='enter text' />
                            <div className="col-6">{data}</div>
                        </div>
                        <div className="col-6">
                            <h6>useRef</h6>
                                <input type="text"  className='form-control mb-3' ref={inputRef} onChange={handleOnChange} placeholder='enter text' />
                            <div className="col-6" ref={displayRef}>atish kamble</div>
                        </div>
                    </div>
                </div>

            </section>   
        </>
    );
};

export default DisplayInput;