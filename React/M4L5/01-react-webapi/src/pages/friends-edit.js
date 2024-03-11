import React, {useState} from 'react';
import {PencilSquare, Save, ArrowCounterclockwise} from 'react-bootstrap-icons'
import { Outlet, useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { uniqueId, seedGenerator } from '../services/seido-helpers';
import FriendList from '../components/friend-list';
import FriendDetailsView from '../components/friend-details-view';
import FriendDetailsEdit from '../components/friend-details-edit';
  


export function FriendsEdit()
{
     const seededData = initialData();
     return (
        <div className="container px-4 py-4 text-start">
 
            <h2 className="pb-2 border-bottom">My friends</h2>
            <Outlet context={seededData}/>

        </div>
    );
}

export function FriendsEditList() {

    const seededData = useOutletContext();
    const navigate = useNavigate();
    const onView = (e) => 
    {
      const id = e.currentTarget.dataset.rowitemid;
      console.log(id);
      navigate(`/friends-edit/${id}`);
    }

    return (
      <>
        <FriendList friends={seededData} onClick={onView}/>
      </>
    );
  }

export function FriendsEditView() {

    const seededData = useOutletContext();
    const navigate = useNavigate();
    const { id } = useParams();
    const person = seededData.find((item) => item.id === id);

    if(!person) {
      return <span>The person doesn't exist.</span>;
    }

    const onEdit = (e) => 
    {
      navigate(`/friends-edit/${id}/edit`);
    }
    const onUndo = (e) => 
    {
      navigate(`/friends-edit`);
    }  
  
    return (
      <>
        <h1>
          View details of my friend {person.firstName} 
          <button className="btn btn-primary-outline" onClick={onEdit}>
            <PencilSquare className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
          </button>
          <button className="btn btn-primary-outline" onClick={onUndo}>
            <ArrowCounterclockwise className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
          </button>
        </h1>
        <FriendDetailsView friend={person}/>
      </>
    );
  }

  export function FriendsEditEdit() {

    const seededData = useOutletContext();
    const navigate = useNavigate();
    const { id } = useParams();

    //React state lifting. The person is state in FriendsEditEdit and passed as props to FriendDetailsEdit
    const p = seededData.find((item) => item.id === id);
    const [person, setPerson] = useState(p);

    if(!person) {
      return <span>The person doesn't exist.</span>;
    }

    const onSave = (e) => 
    {
      const idx = seededData.findIndex((item) => item.id === id);
      seededData[idx] = person;
      navigate(`/friends-edit/${id}`);
    }  

    const onUndo = (e) => 
    {
      navigate(`/friends-edit/${id}`);
    }  

    return (
      <>
        <h1>
          Edit details of my friend {person.firstName} 
          <button className="btn btn-primary-outline" onClick={onSave}>
            <Save className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
          </button>
          <button className="btn btn-primary-outline" onClick={onUndo}>
            <ArrowCounterclockwise className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"/>
          </button>
        </h1>
        <FriendDetailsEdit friend={person} setFriend={setPerson}/>
      </>
    );
  }

  function Person() {

    this.id = undefined;
    this.firstName = undefined;
    this.lastName = undefined;
    this.birthDate = undefined;
    this.email = undefined;
  
    this.address = {};
    this.address.country = undefined;
    this.address.city = undefined;
    this.address.street = undefined;
    this.address.zipCode = undefined;
  
  }
  
  Person.prototype = {
    
    createRandom: function (_sgen) {
      const p = new Person();
      p.id = uniqueId();
      p.firstName = _sgen.firstName;
      p.lastName = _sgen.lastName;
      p.birthDate = _sgen.dateAndTime(1970, 2000).toLocaleDateString('sv-SE');
      p.email = _sgen.email(p.firstName, p.lastName)
  
      p.address.country = _sgen.country;
      p.address.city = _sgen.city(p.address.country);
      p.address.street = _sgen.street(p.address.country);
      p.address.zipCode = _sgen.zipCode;
  
      return p;
    },
    
    createRandomMany: function (_sgen, nrOfItems) {
      return _sgen.toArray(nrOfItems, this.createRandom)
    }
  }
  
  function initialData()
  {
      const _seeder = new seedGenerator();
      return new Person().createRandomMany(_seeder, 100)
  }