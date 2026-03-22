import React from 'react';
import ExpensiveComponent from './ExpensiveComponent';

const UseMemoParent = () => {
    return (
        <>
         
         <section>
            <div className="container">
                <div className="row mb-4">
                    <h4>24 : Here are all useMemo Examples </h4>
                </div>
                <ExpensiveComponent></ExpensiveComponent>
            </div>
        </section>      
        </>
    );
};

export default UseMemoParent;