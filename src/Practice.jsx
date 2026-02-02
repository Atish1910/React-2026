import { useState } from "react";


function Practice({data, onUpdate}){
    const [localName, setLocalName] = useState("atishhh Vinayak Kamble");


    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <h4>11. How to add data into useState array in functional component in react ?</h4>
                        {data}
                        <button type="submit" className="btn btn-primary" onClick={() => onUpdate(localName)}>change name</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Practice;