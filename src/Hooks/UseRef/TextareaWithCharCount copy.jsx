import React, { useRef, useState } from 'react';

const TextareaWithCharCount = () => {
    const totalChar = 100;
    const textAreaRef = useRef(false);
    const [remaining, setRemaining] = useState(totalChar);

    const handleOnChange = () => {
        setRemaining(totalChar - textAreaRef.current.value.length);
    }
    

    return (
        <>
         <section>
            <div className="container">
                <div className="row mb-4">
                    <h4>14. How to display number of characters remaining functionality for textarea using react useRef?</h4>
                    <div className="col-lg-8">
                        <textarea name="" ref={textAreaRef} onChange={handleOnChange} maxLength={totalChar} className='form-control mb-4'></textarea>
                        {<p className='text-danger'>there are  remaining {remaining}Chars</p> }
                    </div>
                </div>
            </div>
            </section>   
        </>
    );
};

export default TextareaWithCharCount;