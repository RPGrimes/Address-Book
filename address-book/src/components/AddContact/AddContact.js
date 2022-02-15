import "./addContact.scss"
import React from "react";
import { useState } from "react";

const AddContact = (props) => {
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

    //NEED TO STORE IT SOMEWHERE WHEN SUBMITTED - in an array of key:values? [{name1: number1}, {name2: number2}] etc.
    const oldState = props.addressList
    const newContact = {Name:contactName, Tel:contactNumber}
    const newState = [...oldState, newContact] //Old state is a list of objects in an array, in order to make a new array of all the old objects plus the new contact. 
    
    props.setAddressList(newState);
  }

  //ADD VALIDATION FUNCTIONS HERE
  const checkValidName = (name) => {

  }

  const checkValidNumber = (number) => {

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
                placeholder="01234567890"
                name="contactNumber"
                value={contactNumber}
                onChange={handleContactNumber}
                ></input>
            </label> <br  />
            <button type="submit">Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddContact;