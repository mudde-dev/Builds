import React from 'react'
import {Save, ArrowCounterclockwise} from 'react-bootstrap-icons'

function AlbumDetailsEdit(props) {

  const album = props.album;
  const handleChange = (e) => {

    const id = e.target.id;
    const val = e.target.value;
    const a = {...album};

    switch (id) {
      case 'name':
        a.name = val;
        break;
      case 'releaseYear':
        a.releaseYear = val;
        break;
      case 'copiesSold':
        a.copiesSold = val;
        break;
      default:
        return;
      }
    props.setAlbum(a);
  }
  
  const onSave = (e) => 
  {
    const form = document.querySelector('.needs-validation')
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add('was-validated')
    }
    else{
      props.onSave(e);
    }
  }  

  return (
    <>
    <h1 hidden={album === undefined}>
      Edit {album?.name} 
      <button className="btn btn-primary-outline" onClick={onSave}>
        <Save className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
      </button>
      <button className="btn btn-primary-outline" onClick={props.onUndo}>
        <ArrowCounterclockwise className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
      </button>
    </h1>
    <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
      <div className="col-md-7 col-lg-8">
        <form className="needs-validation">
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="name" className="form-label">Album</label>
              <input type="text" className="form-control" id="name" value={album?.name} onChange={handleChange} required/>
              <div class="invalid-feedback">
                You must provide an album name.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="copiesSold" className="form-label">Copies Sold</label>
              <input type="text" className="form-control" id="copiesSold" value={album?.copiesSold} onChange={handleChange} required/>
              <div class="invalid-feedback">
                You must provide number of copies sold.
              </div>
            </div>
        
            <div className="col-sm-6">
            </div>
            <div className="col-sm-6">
              <label htmlFor="releaseYear" className="form-label">Release Year</label>
              <input type="text" className="form-control" id="releaseYear" value={album?.releaseYear} onChange={handleChange} required/>
              <div class="invalid-feedback">
                You must provide a release year.
              </div>
            </div>
          </div>
        </form>            
      </div>
  </div>
  </>
  )
}

export default AlbumDetailsEdit