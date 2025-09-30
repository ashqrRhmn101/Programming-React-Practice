import React from "react";

const FormAction = () => {
  const handleFormAction = (formData) => {
    // e.preventDefault()
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };

  return (
    <div>
      <h2>FormAction Form</h2>
      <form action={handleFormAction}>
        <input type="text" name="name" placeholder="Your Name" /> <br />
        <input type="email" name="email" placeholder="Your Email" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormAction;
