import "./listContacts.scss"
import React from "react";
import { useState } from "react";

const ListContacts = (props) => {

  console.log(props.addressList)

  return (
    <div>
      {props.addressList}
    </div>
  )
}

export default ListContacts;