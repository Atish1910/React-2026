import React, { useEffect, useState } from 'react';

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);  
            
            window.addEventListener("resize", handleResize);

            return () => window.removeEventListener("rezie", handleResize);
        }, []);


    return width;
};

export default useWindowWidth;