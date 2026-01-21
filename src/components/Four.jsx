import { useState } from "react";

function Four() {
    
    const contry = [
        {id : "in", name : "india"},
        {id : "am", name : "America"}
    ];

    const state = {
        in : [
            {id : "mh", name : "maharashrta"},
            {id : "gj", name : "Gujrat"}
        ],
        am : [
            {id : "ca", name : "California"},
            {id : "ny", name : "New York"}
        ],
    }

    const [selectedContry, setSelectedContry] = useState("");
    
    const handleOnChange = (e) => {
        setSelectedContry(e.target.value);
    }

    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h4>Q.09 : create dropdown which contain contry name if contry name selected show state in li</h4>
                        </div>
                        <div className="col-lg-6">
                            <select name="" onChange={handleOnChange} className="form-select" id="">
                                <option value=""disabled selected >select below options</option>
                                {
                                    contry.map((c) => (
                                        <option value={c.id} key={c.id}>{c.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="col-lg-6">
                            {
                                selectedContry && 
                                state[selectedContry].map((st) => (
                                    <li key={st.id}>{st.name}</li>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Four;