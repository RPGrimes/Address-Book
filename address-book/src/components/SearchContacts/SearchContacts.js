import "./searchContacts.scss"
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchContacts = (props) => {

  let navigate = useNavigate();

  return (
    <div className="SearchContacts">

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
            navigate("/list");
          }}
        >
          Full Address Book
        </button>
      </div>
    </div>
  )
}

export default SearchContacts;