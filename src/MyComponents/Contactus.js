import React from 'react'
import { useState } from 'react'
export default function Contactus() {
  const [state, setState] = useState({
    email: "",
    password: "",
    Address: "",
    City: "",
    State: "",
    Zip: "",
    Acknowledge: "Not Checked"
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };
  const handleCheckBoxChange = (event) => {
    const { name } = event.target;
    let isChecked = event.target.checked;
    if (isChecked)
      isChecked = "Checked";
    else
      isChecked = "Not Checked";
    setState((prevProps) => ({
      ...prevProps,
      [name]: isChecked
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="row text-center"><h2 className="">Contact Us Form</h2></div>
        <div className="form-row">

          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" className="form-control" placeholder="Email" name="email" onChange={handleInputChange} />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" name="password" onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" className="form-control" name="Address" id="inputAddress" placeholder="1234 Main St" onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label for="inputAddress2">Address 2</label>
          <input type="text" className="form-control" name="Address2" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={handleInputChange} />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" className="form-control" name="City" id="inputCity" onChange={handleInputChange} />
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" className="form-control" name="State" onChange={handleInputChange}>
              <option selected>Choose...</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" name="Zip" onChange={handleInputChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" name="Acknowledge" onChange={handleCheckBoxChange} />
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </div>
  )
}
