import React, { use } from "react";
import { Link } from "react-router";
// import { useLoaderData } from "react-router";

const Users2 = ({ usersPromise }) => {
  const users = use(usersPromise);

  return (
    <div>
      <Link to="/post">Show Post</Link>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Users2;
