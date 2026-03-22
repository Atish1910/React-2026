import React, { useReducer } from 'react';

const initialState = { count : 0 }

const reducer = (state, action) => {
    if(action.type == "INCREMENT"){
        return {
            count : state.count + 1
        }
    }else if(action.type == "DECREMENT"){
        return {
            count : state.count - 1
        }
    }else if(action.type == "RESET"){
        return {
            count : state.count = 0
        }
    }else{
        return state;
    }
    
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div className="row">
                <h4>19. Create a counter component using useReducer ?</h4>
                <div className="col-lg-6">
                <p>count data : {state.count}</p>
                    <button className='btn btn-outline-danger' disabled={state.count == 0}  onClick={() => dispatch({type : "DECREMENT"})} >DECREMENT</button>
                    <button className='btn btn-danger' disabled={state.count == 0}  onClick={() => dispatch({type : "RESET"})} >RESET</button>
                    <button className='btn btn-outline-success' onClick={() => dispatch({type : "INCREMENT"})}>INCREMENT</button>
                </div>

            </div>   
        </>
    );
};

export default CounterReducer;