import React from "react";
import "./Register.css";

function Register() {
  return (
    <div class="text-center" class="col-md-4 offset-4 mt-2 card">
      <form class="form-register">
        <h1  class="h3 mb-3 font-weight-normal">Register</h1>
        <p><b>Enter Email ID</b></p>
        <label for="Email" class="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          class="form-control"
          placeholder="Enter Email ID"
          pattern=".{5,}"
          required
        />
        <p><b>Enter Mobile Number</b></p>
        <label for="PhoneNo" class="sr-only">
          PhoneNo
        </label>
        <input
          type="text"
          id="number"
          class="form-control"
          placeholder="Enter Mobile Number"
          pattern=".{5,}"
          required
        />
        <p><b>Enter Full Name</b></p>
        <label for="userName" class="sr-only">
          userName
        </label>
        <input
          type="text"
          id="userName"
          class="form-control"
          placeholder="Enter Full Name"
          required
          autoFocus
        />
        <p><b>Enter  Password</b></p>
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder=" Enter Password"
          pattern=".{5,}"
          required
        />
         <p><b>Enter  Address</b></p>
            <label for="textarea" class="sr-only">
         Address
        </label>
        <input
          type="textarea"
          id="address"
          class="form-control"
          placeholder="Enter  Address"
          pattern=".{5,}"
          required
        />
        <p><b></b>Select a Gender:</p>
        <p class="gender">
          <span class="gen"></span>
          <input type="radio" name="ge" class="genm" />
          Male
          <input type="radio" name="ge" class="genm" />
          Female
          <input type="radio" name="ge" class="genm" />
          Others
        </p>
        <label for="dropdown" class="sr-only" >
          Places
          </label>
 <select class="form-control" id = "dropdown" >
    <option value="Places">Choose a Place</option>
    <option value="1">Delhi</option>
    <option value="2">Goa</option>
    <option value="3">Karwar</option>
    <option value="4">Kashmir</option>
    <option value="5">Kerala</option>
    <option value="6">Meghalaya</option>
    <option value="7">Shimla</option>
    <option value="8">Rajasthan</option>
    <option value="9">Leh Laddak</option>
 </select>
 <button class="btn btn-lg btn-primary btn-block" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;