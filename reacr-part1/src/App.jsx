import "./App.css";
import Props from "./props";
import ToDo from "./ToDo";
import Actor from "./Actor";

function App() {
  const time =50;

  const actors =[
    {id: 1, name: "Alom", age: 30,},
    {id: 2, name: "Jlom", age: 35,},
    {id: 3, name: "Mlom", age: 50,}
  ]
  return (
    <>
      <h1>Hello React</h1>

      {
        actors.map(actor => <Actor key={actor.id} actor={actor}></Actor>)
      }

      <ToDo task= "Learn Java" isDone={true} time={time}></ToDo>
      <ToDo task= "Learn JavaScript" isDone={false} time={time}></ToDo>
      <ToDo task= "Learn Python" isDone={true} time="100"></ToDo>

      <Props name="Omor Faruk" age="20"></Props>
      <Props name="Hero Alom" age="30"></Props>

      <Player name="Maradona"></Player>

      <Person name="Alom" age="25"></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>


      <Props name="Alom" age="40"></Props>
    </>
  );
}

function Player({name, goal=100}) {
  const style = {
    marginBottom:"10px",
    color: "green",
    border: "2px solid green",
    borderRadius:"10px"
  }
  return (
    <div style={style}>
      <p>Football Player: {name}</p>
      <p>Football Player Goal: {goal}+ </p>
    </div>
  );
}

function Person() {
  const name = "alom";
  const age = 50;

  const personStyle = {
    color: "red",
    textAlign: "right",
    border: "2px solid white",
    borderRadius: "10px",
    padding: "10px",
  };
  return (
    <li style={personStyle}>
      Name: {name} {age}
    </li>
  );
}

function Student() {
  return (
    <div className="student">
      <h2>Students</h2>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  );
}

function Developer() {
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "10px",
      }}
    >
      <p>Dv</p>
      <p>Tc</p>
    </div>
  );
}

export default App;
