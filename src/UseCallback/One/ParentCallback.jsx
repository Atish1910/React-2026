import { useCallback, useState } from "react";
import ChildCallback from "./ChildCallback";

const ParentCallback = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    const handleOnClick = useCallback(() => {
        console.log("button clicked");
        setCount((count) => count + 1);
    }, []);
    
    return (
        <>
            <div className="row">
                <h6>
                    <p>Suppose you have a parent component that renders a child component. The child receives a function as a prop. If the parent re-renders, the function is recreated, causing the child to re-render unnecessarily.</p></h6>
                <div className="col-lg-6 border">
                    <h5>here i am parent compoent of call back </h5>
                    <h6>{count}</h6>
                    
                    <button className='btn btn-success' onClick={() => setCount(count + 1)}>click</button>
                    <ChildCallback handleOnClick={handleOnClick}></ChildCallback>
                    <button className="btn btn-outline-primary" onClick={() => setOtherState(!otherState)}>Toggle Other state</button>

                </div>
            </div>   
        </>
    );
};

export default ParentCallback;