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

  const matchingResults = [];

  contactList.forEach((element) => {
    if (searchName === "") return;
    if (element.name.toLowerCase().includes(searchName)) {
      if (!matchingResults.includes(element)) {
        matchingResults.push(element);
      }
    }
  });

  contactList.forEach((element) => {
    if (element.number === searchNumber) {
      if (!matchingResults.includes(element)) {
        matchingResults.push(element);
      }
    }
  });

  const listResults = matchingResults.map(({ name, number }) => {
    return (
      <p key={name}>
        Name: {name} Tel: {number}
      </p>
    );
  });

  return (
    <div className='searchContacts'>
      <h1>Address Book</h1>
      <p>
        Please enter what you are searching for into the form below and see the
        results update below.
      </p>
      <h4>You may only search by name OR number, do not search using both</h4>
      <p>To search by name you can enter a partial or exact match</p>
      <p>To search by number it must be an exact match</p>
      <form>
        <label>
          Name:
          <input
            className='input'
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
            className='input'
            type='text'
            placeholder='Contact Number'
            name='searchNumber'
            value={searchNumber}
            onChange={handleSearchNumber}></input>
        </label>
      </form>
      <div>{listResults}</div>
      {/* <div>{listNumberResults}</div> */}
      <div className='navigationButtons'>
        <button
          className='btn'
          type='submit'
          onClick={() => {
            navigate("/");
          }}>
          Add New Contact(s)
        </button>
        <button
          className='btn'
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
