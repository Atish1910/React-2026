import React from 'react';
import UserProvider from './UserProvider';
import MyComponent from './MyComponent';
import ChildComponent from './ChildComponent';

const ParentContext = () => {
    return (
        <>
            <UserProvider>
                <MyComponent></MyComponent>
                <ChildComponent></ChildComponent>   
            </UserProvider>   
        </>
    );
};

export default ParentContext;