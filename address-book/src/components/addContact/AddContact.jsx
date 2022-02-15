import "./addContact.scss"

export default function addContact() {

  return (
    <div className="addContact" id="addContact">
        <div className='formContainer'>
          <h3>Enter a contact name and telephone number</h3>
            <label>
              Name:  
              <input
                type="text"
                placeholder="Contact Name"
                name="contactName"
                ></input>
            </label> <br />
            <label>
              Tel:
              <input
                type="text"
                placeholder="01234567890"
                name="contactNumber"
                ></input>
            </label>
        </div>
    </div>
  )
}