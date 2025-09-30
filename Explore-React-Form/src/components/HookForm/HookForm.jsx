import React from "react";
import useInputField from "../../hooks/useInputField";

const HookForm = () => {
    const [name, nameChange] = useInputField("")
    const [email, emailChange] = useInputField("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="name" name="name" placeholder="Name" defaultValue={name} onChange={nameChange} /> <br />
        <input type="email" name="email" placeholder="Email" defaultValue={email} onChange={emailChange}/> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
