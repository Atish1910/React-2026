import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const MyComponent = () => {
    const {user} = useContext(UserContext);
    return (
        <>
         <h4>i am my component</h4>   
            {user.name}
        </>
    );
};

export default MyComponent;