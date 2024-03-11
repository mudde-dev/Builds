import React from 'react'

function FriendDetailsView(props) {
  return (
    <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
    <div className="col-md-7 col-lg-8">
      <form className="needs-validation">
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="firstName" className="form-label">First name</label>
            <input type="text" className="form-control" id="firstName" value={props.friend.firstName} readOnly/>
          </div>

          <div className="col-sm-6">
            <label htmlFor="lastName" className="form-label">Last name</label>
            <input type="text" className="form-control" id="lastName" value={props.friend.lastName} readOnly/>
          </div>
      
          <div className="col-sm-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={props.friend.email} readOnly/>
          </div>
          <div className="col-sm-6">
            <label htmlFor="birthday" className="form-label">Birthday</label>
            <input type="birthday" className="form-control" id="birthday" value={props.friend.birthDate} readOnly/>
          </div>

          <div className="row g-3 visible">
            <div className="col-12">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" value={props.friend.address.street} readOnly/>
            </div>

            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" value={props.friend.address.zipCode} readOnly/>
            </div>

            <div className="col-md-4">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" id="city" value={props.friend.address.city} readOnly/>
            </div>

            <div className="col-md-5">
              <label htmlFor="country" className="form-label">Country</label>
              <input type="text"  className="form-control" id="country" value={props.friend.address.country} readOnly/>
          </div>
        </div>
        </div>
      </form>            
    </div>
</div>
  )
}

export default FriendDetailsView