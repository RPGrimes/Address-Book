import "./listContacts.scss"
import React from "react";
import { useNavigate } from "react-router-dom";

const ListContacts = (props) => {

  let navigate = useNavigate();

  const contactList = props.addressList

  contactList.sort(function(a, b){
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) {return 1; }
    return 0;
  })
  // console.log(props.addressList) //This successfully logs to console, showing that the props have been passed from parent(App.js) to child (this component)
  console.log(contactList)

  const listContacts = contactList.map(( {name, number} ) => {
    return <p key={name}>{name}: {number}</p>
  })

  return (
    <div className="listContacts">
      {listContacts}

      <div className="navigationButtons">
        <button
          className="btn-start"
          type="submit"
          onClick={() => {
            navigate("/");
          }}
        >
          Add New Contact(s)
        </button>
        <button
          className="btn-start"
          type="submit"
          onClick={() => {
            navigate("/search");
          }}
        >
          Search Contacts
        </button>
      </div>
    </div>
  )
}

export default ListContacts;