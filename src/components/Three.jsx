import React, { useRef, useState } from 'react';

const Three = () => {
    const textInputRef = useRef(null);
    const maxLength = 100;

    const [remaining, setRemaining] = useState(maxLength);

    const handleRemainingData = () => {
        const currentLength = textInputRef.current.value.length;
        setRemaining(maxLength- currentLength);
    }

return (
<>
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h4>14. How to display number of characters remaining functionality for textarea using react useRef?</h4>
                    <textarea name="" ref={textInputRef} onChange={handleRemainingData} rows={4} className='form-control' id=""></textarea>
                    <p>{remaining}</p>
                </div>
            </div>
        </div>
    </section>
</>
)};

export default Three;