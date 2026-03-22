import React, { useState } from 'react';

const AddNewDataInArray = () => {
    const [data, setData] = useState(["atish", "manthan", "pratik"]);
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleOnKeyDown = (e) => {
        if(e.key == "Enter"){
            setData([...data, input]);
            setInput("");
        }
    }


    return (
        <>
            <div className="row pt-5">
                <h4>11. How to add data into useState array in functional component in react ?</h4>
                <div className="col-lg-6">
                    <input type="text" className='form-control mb-3' value={input} onKeyDown={handleOnKeyDown} onChange={handleInput} placeholder='enter new data here' />
                    <ul>
                        {
                            data.map((d) => (
                                <li key={d}>{d}</li>
                            ))
                        }
                    </ul>
                </div>    
            </div>   
        </>
    );
};

export default AddNewDataInArray;