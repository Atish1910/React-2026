import React, { useState } from 'react';

const Five = () => {
    
    const friends = ["manthan", "Niru", "tushar", "Aaakya", "Pratik", "gana"];
    const [search, setSearch] = useState("");

    const filterData = friends.filter((i) => i.toLowerCase().includes(search.toLowerCase()))

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h4>15. Create a search textbox filter in reactjs</h4>
                        <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Enter the search item' />
                        <ul>
                            {
                                filterData.map((f) => (
                                    <li key={f}>{f}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Five;