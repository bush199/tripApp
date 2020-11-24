import React from "react";
import "./Login.css";

function Login() {
  return (
    <div class="text-center" className="col-md-4 offset-4 mt-2 card">
      <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
        <p><b>Enter Email ID</b></p>
        <label for="inputEmail" class="sr-only">
          Email ID
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Enter Email Id"
          required
          autoFocus
        />
        <p><b>Enter Password</b></p>
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
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
