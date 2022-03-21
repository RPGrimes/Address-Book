import "./addContact.scss";
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

  const handleChange = (e) => {
    e.preventDefault();

    if (checkValidName() === false) {
      return alert(
        "Invalid name entered. Names must be comprised of letters or spaces ONLY. Please try again!"
      );
    }

    if (checkValidNumber() === false) {
      return alert(
        'Invalid number entered. Number must contain only numerical digits, "+" or parentheses. Please try again!'
      );
    }

    if (checkValidNumberStart() === false) {
      return alert(
        'Invalid number entered. Number must start with either "+" or "0". If it starts with a + the second digit may NOT be "0" Please try again!'
      );
    }

    if (checkNumberOfBrackets() === false) {
      return alert(
        "Invalid number entered. Number must have either 0 or 1 complete set of parentheses. Please try again!"
      );
    }

    if (checkBracketOrder() === false) {
      return alert(
        "Brackets must be in the correct order to be valid!"
      );
    }

    const oldState = props.addressList;
    const newContact = { name: contactName, number: contactNumber };
    const newState = [...oldState, newContact]; //Old state is a list of objects in an array, in order to make a new array of all the old objects plus the new contact.

    props.setAddressList(newState);
    setContactName("");
    setContactNumber("");
    return alert("Contact successfully added!");
  };

  //------------------------
  // VALIDATION FUNCTIONS
  //------------------------
  const checkValidName = () => {
    return /^[a-zA-Z\s]*$/.test(contactName);
  };

  const checkValidNumberStart = (number) => {
    const contactNumberArray = contactNumber.split("");
    if (contactNumberArray[0] !== "0" && contactNumberArray[0] !== "+") {
      return false;
    }
    if (contactNumberArray[0] === "+" && contactNumberArray[1] === "0") {
      return false;
    }
  };

  const checkNumberOfBrackets = (number) => {
    let string = "()";
    const stringArr = string.split("");

    let openParCount = 0;
    let closeParCount = 0;

    const contactNumberArray = contactNumber.split("");

    contactNumberArray.forEach((element) =>
      element === stringArr[0] ? openParCount++ : null
    );
    contactNumberArray.forEach((element) =>
      element === stringArr[1] ? closeParCount++ : null
    );

    if (openParCount !== closeParCount) {
      return false;
    } else if (openParCount > 1) {
      return openParCount > 1 ? false : null;
    }
  };

  const checkBracketOrder = () => {
    let string = "()";
    const stringArr = string.split("");
    const contactNumberArray = contactNumber.split("");

    let openParArray = [];
    let closeParArray = [];

    contactNumberArray.forEach((element) =>
      element === stringArr[0] ? openParArray.push(contactNumberArray.indexOf(element)) : null
    );

    contactNumberArray.forEach((element) =>
    element === stringArr[1] ? closeParArray.push(contactNumberArray.indexOf(element)) : null
  );

    if(openParArray[0] > closeParArray[0])
      return false;
    }

  const checkValidNumber = () => {
    return /^[0-9\(\)\+\,]*$/.test(contactNumber);
  };

  //------------------------
  // MAIN BODY OF COMPONENT RETURN
  //------------------------

  return (
    <div className='addContact' id='addContact'>
      <div>
        <h3>Enter a contact name and telephone number</h3>
        <div className='formContainer' onSubmit={handleChange}>
          <form>
            <label>
              Name:
              <input
                className='input'
                type='text'
                placeholder='Contact Name'
                name='contactName'
                value={contactName}
                onChange={handleContactName}></input>
            </label>{" "}
            <br />
            <label>
              Tel:
              <input
                className='input'
                type='text'
                placeholder='Contact Number'
                name='contactNumber'
                value={contactNumber}
                onChange={handleContactNumber}></input>
            </label>{" "}
            <br />
            <button type='submit' className='btn'>
              Submit
            </button>
          </form>
        </div>
      </div>
      <button
        className='btn'
        type='submit'
        onClick={() => {
          navigate("list");
        }}>
        Full Address Book
      </button>
      <button
        className='btn'
        type='submit'
        onClick={() => {
          navigate("/search");
        }}>
        Search Contacts
      </button>
    </div>
  );
};

export default AddContact;
