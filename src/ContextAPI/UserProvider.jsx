import React, { useState } from 'react';
import { UserContext } from './UserContext';

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name : "atishhhh",
        email : "atishkamble398@gmail.com"
    });
    return (
        <UserContext value={{user, setUser}}>
            {children}
        </UserContext>
    );
};

export default UserProvider;