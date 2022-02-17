import "./addContact.scss"
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {

  let navigate = useNavigate();

  //------------------------
  // DECLARE STATE VARIABLES
  //------------------------
  const [contactName, setContactName] = useState();
  const [contactNumber, setContactNumber] = useState();

  const handleContactName = (e) => {
    setContactName(e.target.value);
  };

  const handleContactNumber = (e) => {
    setContactNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  //  validation functions to go in here below to be reviewed upon submit

    const oldState = props.addressList
    const newContact = {name:contactName, number:contactNumber}
    const newState = [...oldState, newContact] //Old state is a list of objects in an array, in order to make a new array of all the old objects plus the new contact. 
    
    props.setAddressList(newState);
  }

  //ADD VALIDATION FUNCTIONS HERE
  const checkValidName = () => {
  }

  const checkValidNumber = (contactNumber) => {

  }

  return (
    <div className="addContact" id="addContact">
        <div>
          <h3>Enter a contact name and telephone number</h3>
          <div className='formContainer' onSubmit={handleSubmit}>
            <form>
            <label>
              Name:  
              <input
                type="text"
                placeholder="Contact Name"
                name="contactName"
                value={contactName}
                onChange={handleContactName}
                ></input>
            </label> <br />
            <label>
              Tel:
              <input
                type="text"
                placeholder="Contact Number"
                name="contactNumber"
                value={contactNumber}
                onChange={handleContactNumber}
                ></input>
            </label> <br  />
            <button type="submit">Submit</button>
            </form>
        </div>
      </div>
      <button
        className="btn-start"
        type="submit"
        onClick={() => {
          navigate("list");
        }}
      >
        Full Address Book
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
  )
}

export default AddContact;