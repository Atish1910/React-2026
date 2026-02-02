import React, { useState } from 'react';
import ElevenChild from './ElevenChild';

const ElevenParent = () => {
    const [data, setData] = useState("ATishhhh");

    function handleOnChange(data){
        setData(data);
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <h4>pass data from parent to child & modify & Resend</h4>
                        <ElevenChild data={data} handleOnChange={handleOnChange}></ElevenChild>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default ElevenParent;