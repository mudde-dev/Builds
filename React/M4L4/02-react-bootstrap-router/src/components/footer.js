import React from 'react';
import {Link } from "react-router-dom";

export default function Footer()
{
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                <Link style={{textDecoration: 'none'}} to="/">
                     <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Seido AB</span>
                 </Link>
                </div>
                <div className="col-md-4 d-flex align-items-center">
                <Link style={{textDecoration: 'none'}} to="/page2">
                    <span className="mb-3 mb-md-0 text-body-secondary">Link to page2 from footer</span>
                </Link> 
                </div>
            </footer>
        </div>  
    );
}

