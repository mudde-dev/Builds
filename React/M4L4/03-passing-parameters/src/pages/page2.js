import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Page2()
{
    const location = useLocation();
    const data = location.state;

    return (
        <div className="container px-4 py-4 text-start">
 
            <h2 className="pb-2 border-bottom">Page 2</h2>
            <p>This is a page 2. 
                {data !== null ?`passed data is {${data.info}, ${data.price}}` :null}
            </p>
        </div>
    );
}