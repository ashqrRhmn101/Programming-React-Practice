import React, { useState } from "react";

const ControlledField = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailOnChange = e =>{
    console.log(e.target.value)
      setEmail(e.target.value)
  }

  const handlePassOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target)
    if (password.length < 6) {
      setError("Password must be 6 characters or longer.");
      return;
    } else {
      setError("");
    }
    console.log("submitted");
  };

  return (
    <div>
      <h2>ControlledField</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />{" "}
        <br />
        <input type="email" name="email" placeholder="Your Email" onChange={handleEmailOnChange} defaultValue={email} required />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Your Pass"
          onChange={handlePassOnChange}
          defaultValue={password}
          required
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>

      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ControlledField;
