import React from 'react'

function AlbumDetailsView(props) {

  const album = props.album;
  return (
    <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
    <div className="col-md-7 col-lg-8">
      <form className="needs-validation">
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="name" className="form-label">Album</label>
            <input type="text" className="form-control" id="name" value={album?.name} readOnly/>
          </div>

          <div className="col-sm-6">
            <label htmlFor="copies" className="form-label">Copies Sold</label>
            <input type="text" className="form-control" id="copies" value={album?.copiesSold} readOnly/>
          </div>
      
          <div className="col-sm-6">
           </div>
          <div className="col-sm-6">
            <label htmlFor="releaseyear" className="form-label">Release Year</label>
            <input type="text" className="form-control" id="releaseyear" value={album?.releaseYear} readOnly/>
          </div>
        </div>
      </form>            
    </div>
</div>
  )
}

export default AlbumDetailsView