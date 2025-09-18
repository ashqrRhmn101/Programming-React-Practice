import "./App.css";
import Count from "./Count";
import Cricket from "./Cricket-Score";
import Fetch from "./Fetch";
import { Suspense } from "react";
import Friends from "./Frands";

const userImport = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const FriendsPromise = fetchFriends();

  function handleClick() {
    alert("Clicked");
  }

  const handleClick2 = () => {
    alert("Clicked 2");
  };

  const handleClick5 = (num) => {
    const number = num + 20;
    alert(number);
  };

  return (
    <>
      <h1>Vite + React</h1>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>

      <button
        onClick={function handleClick3() {
          alert("hello");
        }}
      >
        Click3
      </button>
      <button onClick={() => alert("Hi")}>Click 4</button>

      <button onClick={() => handleClick5(10)}>Number Btn</button>

      <Suspense fallback={<h2>Users Loading...</h2>}>
        <Fetch userImport={userImport}></Fetch>
      </Suspense>
      <Suspense fallback={<h2>Friends Loading...</h2>}>
        <Friends FriendsPromise={FriendsPromise}></Friends>
      </Suspense>
      <Cricket></Cricket>
      <Count></Count>
    </>
  );
}

export default App;
