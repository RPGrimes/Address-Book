import "./searchContacts.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchContacts = (props) => {
  let navigate = useNavigate();

  const contactList = props.addressList;

  const [searchName, setSearchName] = useState();
  const [searchNumber, setSearchNumber] = useState();

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchNumber = (e) => {
    setSearchNumber(e.target.value);
  };

  const matchingNameResults = [];
  const matchingNumberResults = [];

  let i = 0;

  const searchNames = contactList.forEach((element) => {
    if (searchName === "") return;
    if (element.name.includes(searchName)) {
      matchingNameResults.push(element);
    }
  });

  const searchNumbers = contactList.forEach((element) => {
    if (element.number === searchNumber) {
      matchingNumberResults.push(element);
    }
  });

  const listNameResults = matchingNameResults.map(({ name, number }) => {
    return (
      <p key={name}>
        Name: {name} Tel: {number}
      </p>
    );
  });

  const listNumberResults = matchingNumberResults.map(({ name, number }) => {
    return (
      <p key={name}>
        Name: {name} Tel: {number}
      </p>
    );
  });

  return (
    <div className='SearchContacts'>
      <h1>Address Book</h1>
      <p>
        Please enter what you are searching for into the form below and see the
        results update below.
      </p>
      <p>To search by name you can enter a partial or exact match</p>
      <p>To search by number it must be an exact match</p>
      <form>
        <label>
          Name:
          <input
            type='text'
            placeholder='Contact Name'
            name='searchName'
            value={searchName}
            onChange={handleSearchName}></input>
        </label>{" "}
        <br />
        <label>
          Tel:
          <input
            type='text'
            placeholder='Contact Number'
            name='searchNumber'
            value={searchNumber}
            onChange={handleSearchNumber}></input>
        </label>
      </form>
      <div>{listNameResults}</div>
      <div>{listNumberResults}</div>
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
            navigate("/list");
          }}>
          Full Address Book
        </button>
      </div>
    </div>
  );
};

export default SearchContacts;
