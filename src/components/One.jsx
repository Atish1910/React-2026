import { useState } from "react";

function One () {
    const [data, setData] = useState(["atish", "manthan", "sakshiii"]);
    const [input, setInput] = useState("");

    const handleAddNewItem = (e) => {
        if(e.key == "Enter"){
            setData([...data, input]);
            setInput("");
        }
    }

    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>11. How to add data into useState array in functional component in react ?</h4>
                            <input type="text" value={input} onKeyDown={handleAddNewItem} onChange={(e) => setInput(e.target.value)} className="form-control my-3" />
                            <ul>
                                {
                                    data.map((d) => (
                                        <li>{d}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
};

export default One;