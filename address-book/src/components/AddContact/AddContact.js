import "./addContact.scss"
import React from "react";
import { useState } from "react";

const AddContact = (props) => {
  //------------------------
  // DECLARE STATE VARIABLES
  //------------------------
  let name = '';
  let number = '';

  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);

  const handleContactName = (e) => {
    setContactName(e.target.value);
  };

  const handleContactNumber = (e) => {
    setContactNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  //  validation functions to go in here below to be reviewed upon submit
    
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