import React, { useRef, useState } from 'react';

const ControlledInput = () => {
    const [input, setInput] = useState("");

    const inputRef = useRef(null);
    
    const handleOnEnter = (e) => {
        if(e.key == "Enter"){
            alert(e.target.value)
        }
    } 
    
    const handleOnSubmit = () => {
        alert("enterd data is : " + inputRef.current.value);
    }


    return (
        <>
            <div className="row">
                <h4>22. Create a controlled and uncontrolled component in react ?</h4>
                <div className="col-lg-6 border py-3">
                    <h6>controlled COmponent (useState)</h6>
                    <input type="text" className='form-control' placeholder='enter your name & Enter' onKeyDown={handleOnEnter} onChange={(e) => setInput(e.target.value)} />
                    <p>{input}</p>
                </div>
                <div className="col-lg-6">
                    <h6>controlled COmponent (useState)</h6>
                    <input type="text" className='form-control'  ref={inputRef} placeholder='enter your name' />
                    <button className='btn btn-outline-secondary my-3' onClick={handleOnSubmit}>view data</button>
                </div>
            </div>
        </>
    );
};

export default ControlledInput;