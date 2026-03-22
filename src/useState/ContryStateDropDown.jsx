import React, { useState } from 'react';

const ContryStateDropDown = () => {
    const contries = [
        {id : "in", name : "india"},
        {id : "am", name : "america"}
    ];
    const state = {
        in : [
            {id : "mh", name : "Maharshtra"},
            {id : "gj", name : "Gujrat"}
        ],
        am : [
            {id : "ca", name : "California"},
            {id : "ny", name : "New York"}
        ]
    };

    const [selectedContry, setSelectedContry] = useState(null);


    return (
        <>
            <div className="row">
                <h4>9. Given two dropdowns, select 2nd dropdown options based on value selected in one dropdown in reactjs ? (Load states based on country selected)</h4>
                <div className="col-lg-4 py-4 border ">
                    <select name="" onChange={(e) => setSelectedContry(e.target.value)} id="" className='form-control'>
                        <option selected disabled value="">select below contry to view state</option>
                        {
                            contries.map((c) => (
                                <option value={c.id}>{c.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-lg-4">
                    {state[selectedContry]?.map((state) => (
                        <p>{state.name}</p>
                    ))
                    }
                </div>
            </div>
        </>
    );
};

export default ContryStateDropDown;