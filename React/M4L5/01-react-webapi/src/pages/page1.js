import React from 'react';
import { useParams } from 'react-router-dom';

export default function Page1()
{
    const {param1, param2}  = useParams();

    return (
        <div className="container px-4 py-4 text-start">
 
            <h2 className="pb-2 border-bottom">Page 1</h2>
            <p>This is a page 1.</p>
            <p>{param1 !== undefined ?`param1 is ${param1}` :null} </p>
            <p>{param2 !== undefined ?`param2 is ${param2}` :null} </p>
        </div>
    );
}