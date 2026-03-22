import React, { useState } from 'react';

function AccordionUseState  () {
    const friends = [
        {id : 1, name : "Tusha", gf : "purva..."},
        {id : 2, name : "Niryaa", gf : "Kajal..."},
        {id : 3, name : "Ganya", gf : "Soni..."},
        {id : 4, name : "Atish", gf : "Ishuu.."},
    ];

    const [activeUser, setActiveUser] = useState(1);

    const handleToggle = (id) => {
        setActiveUser(activeUser == id ? null : id);
    }

    return (
        <>
         <section>
                <div className="container">
                    <div className="row">
                        <h4>04 : create a accordian button if user click on any button it show data
                            useState
                        </h4>
                        <div className="col-lg-6">
                            <ul>
                                {
                                    friends.map((f)=> (
                                        <div className="">
                                            <li className={` border mb-2 ${activeUser == f.id ? "bg-success text-white" : ""} `} onClick={() => handleToggle(f.id)} >{f.name}</li>
                                            {
                                                activeUser == f.id &&  <p>{f.gf}</p>
                                            }
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="">
                            
                        </div>
                    </div>
                </div>    
        </section>   
        </>
    );
};

export default  AccordionUseState;