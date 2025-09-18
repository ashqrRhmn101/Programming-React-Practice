import { use } from "react";
import Friend from "./Friend";

export default function Friends({ FriendsPromise }) {
  const friends = use(FriendsPromise);
  return (
    <div className="cards">
      <h1>Friends: {friends.length}</h1>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}
