import React, { useState } from "react";
import "./styles.css";
function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      {console.log(name, email, password)}
      <h1>Student Registration Form</h1>
      <form>
        <label for="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <label for="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Signup;
