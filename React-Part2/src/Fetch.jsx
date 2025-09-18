import { use } from "react";

export default function Fetch({ userImport }) {
  const users = use(userImport);
  // console.log(users)

  return (
    <div className="cards">
      <p>User: {users.length}</p>
    </div>
  );
}
