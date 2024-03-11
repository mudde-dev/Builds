import React from 'react';


export default function AlbumList(props)
{
    const albums = props.serviceData?.pageItems;
    return (
        <>
        <div className="row mb-2 text-center">
            <div className="col-md-4 themed-grid-col themed-grid-head-col">Name</div>
            <div className="col-md-4 themed-grid-col themed-grid-head-col">Copies sold</div>
            <div className="col-md-2 themed-grid-col themed-grid-head-col">Release Year</div>
        </div>
        {albums?.map((row, idx) => (

            //assign the id to the row and the eventhandler from props
            <div className="row mb-2 text-center" key={row.albumId} data-rowitemid={row.albumId} 
                onClick={props.onClick}>

                <div className="col-md-4 themed-grid-col">
                    {row.name}
                </div>

                <div className="col-md-4 themed-grid-col">
                    {row.copiesSold}
                </div>
                <div className="col-md-2 themed-grid-col">
                    {row.releaseYear}
                </div>
            </div>
        ))}
    </>
    );
}


