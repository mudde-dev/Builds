import React from 'react';


export default function FriendList(props)
{
    const friends = props.friends;
    return (
        <>
        <div className="row mb-2 text-center">
            <div className="col-md-4 themed-grid-col themed-grid-head-col">Name</div>
            <div className="col-md-4 themed-grid-col themed-grid-head-col">Address</div>
            <div className="col-md-2 themed-grid-col themed-grid-head-col">Born</div>
        </div>
        {friends.map((row, idx) => (

            //assign the id to the row and the eventhandler from props
            <div className="row mb-2 text-center" key={row.id} data-rowitemid={row.id} 
                onClick={props.onClick}>

                <div className="col-md-4 themed-grid-col">
                    {row.firstName} {row.lastName}
                    <div className="col-md-16">{row.email}</div>
                </div>

                <div className="col-md-4 themed-grid-col">
                    {row.address.street}

                    <div className="col-md-16">{row.address.zipCode} {row.address.city}</div>
                    <div className="col-md-16">{row.address.country}</div>
                </div>
                <div className="col-md-2 themed-grid-col">
                    {row.birthDate}
                </div>
            </div>
        ))}
    </>
    );
}


