import React from 'react'
import {Save, ArrowCounterclockwise} from 'react-bootstrap-icons'

function FriendDetailsEditValidation(props) {

  const handleChange = (e) => {

    const id = e.target.id;
    const val = e.target.value;
    const friend = {...props.friend};
    friend.address = {...props.friend.address};

    switch (id) {
      case 'firstName':
        friend.firstName = val;
        break;
      case 'lastName':
        friend.lastName = val;
        break;
      case 'email':
        friend.email = val;
        break;
      case 'birthday':
        friend.birthDate = val;
        break;
      case 'street':
        friend.address.street = val;
        break;
      case 'zip':
        friend.address.zipCode = val;
        break;
      case 'city':
        friend.address.city = val;
        break;
      case 'country':
        friend.address.country = val;
        break;
      default:
        return;
      }
    props.setFriend(friend);
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
    <h1>
      Edit details of my friend {props.friend.firstName} 
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
            <label htmlFor="firstName" className="form-label">First name</label>
            <input type="text" className="form-control" id="firstName" value={props.friend.firstName} onChange={handleChange} required/>
            <div class="invalid-feedback">
              You must provide a firstname.
            </div>
          </div>

          <div className="col-sm-6">
            <label htmlFor="lastName" className="form-label">Last name</label>
            <input type="text" className="form-control" id="lastName" value={props.friend.lastName} onChange={handleChange} required/>
            <div class="invalid-feedback">
              You must provide a lastname.
            </div>
          </div>
      
          <div className="col-sm-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={props.friend.email} onChange={handleChange} required/>
            <div class="invalid-feedback">
              You must provide an email.
            </div>
          </div>
          <div className="col-sm-6">
            <label htmlFor="birthday" className="form-label">Birthday</label>
            <input type="date" className="form-control" id="birthday" value={props.friend.birthDate} onChange={handleChange} required/>
            <div class="invalid-feedback">
              You must provide a birthdate.
            </div>         
          </div>

          <div className="row g-3 visible">
            <div className="col-12">
              <label htmlFor="street" className="form-label">Address</label>
              <input type="text" className="form-control" id="street" value={props.friend.address.street} onChange={handleChange} required/>
              <div class="invalid-feedback">
                You must provide a streetname.
              </div>    
            </div>

            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" value={props.friend.address.zipCode} onChange={handleChange} required/>
              <div class="invalid-feedback">
                You must provide a zipcode.
              </div>              
            </div>

            <div className="col-md-4">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" value={props.friend.address.city} required onChange={handleChange} />
              <div class="invalid-feedback">
                You must provide a city.
              </div>              
            </div>

            <div className="col-md-5">
              <label htmlFor="country" className="form-label">Country</label>
              <input type="text"  className="form-control" id="country" value={props.friend.address.country} onChange={handleChange} required/>
              <div class="invalid-feedback">
                You must provide a country.
              </div>   
          </div>
        </div>
        </div>
      </form>            
    </div>
  </div>
  </>
  )
}

export default FriendDetailsEditValidation