import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  // console.log(user);
  const { username, website, email } = user;

  return (
    <div>
      <h3>User Details here.</h3>
      <h2>Email : {email}</h2>
      <h2>User Name: {username}</h2>
      <h2>Website: {website}</h2>
    </div>
  );
};

export default UserDetails;
