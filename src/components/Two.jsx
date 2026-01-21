import React, { useState } from "react"
function Two() {
    const [isSelected, setIsSelected] = useState(false);

    const handleOnCHange = () => {
        setIsSelected(!isSelected);
    }
return(
<>
    <section>
        <div className="container">
            <div className="row">
                <h4>16. Display radio button data selected by user in another textbox UseState</h4>
                <div className="">
                    <input type="checkbox" onChange={handleOnCHange} />
                    { isSelected && "Male" }
                </div>
            </div>
        </div>
    </section>
</>
)}
export default Two;