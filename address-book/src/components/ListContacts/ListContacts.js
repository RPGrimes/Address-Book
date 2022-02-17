import "./listContacts.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const ListContacts = (props) => {
  let navigate = useNavigate();

  const contactList = props.addressList;

  contactList.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const listContacts = contactList.map(({ name, number }) => {
    return (
      <p key={name}>
        Name: {name} Tel: {number}
      </p>
    );
  });

  return (
    <div className='listContacts'>
      <h1>Address Book</h1>
      <p>Please see a list of all contacts below</p>

      {listContacts}

      <div className='navigationButtons'>
        <button
          className='btn-start'
          type='submit'
          onClick={() => {
            navigate("/");
          }}>
          Add New Contact(s)
        </button>
        <button
          className='btn-start'
          type='submit'
          onClick={() => {
            navigate("/search");
          }}>
          Search Contacts
        </button>
      </div>
    </div>
  );
};

export default ListContacts;
