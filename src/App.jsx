import "./App.css";
import ToDo from "./toDo";
import Food from "./food";
import RToDo from "./conditionalToDo";
import Actor from "./actor";
import Singer from "./singer";
import Team from "./team";

// -----------summury and recap
import Library from './library'

function App() {
  const done = "take shower";
  const discount = "10%";
  const times = 50;

  // -------------------for map rendering
  const Teams = [
    { id: 1, TeamName: "ATM", Stadium: "Metropoliton" },
    { id: 2, TeamName: "RMA", Stadium: "Santiago Bernabue" },
    { id: 3, TeamName: "Barca", Stadium: "Camp Nou" },
    { id: 4, TeamName: "Man Utd", Stadium: "Old Trafford" },
  ];
  const actors = ["Hero", "Salman", "Siam", "Riaz", "Shakib Khan"];

  const singers = [
    { id: 1, name: "Dr Mahfuz", age: 58 },
    { id: 2, name: "Tahsan", age: 45 },
    { id: 3, name: "Shuvro Deb", age: 56 },
  ];

  const books = [
    {id:1, book:"Physics", price:260},
    {id:2, book:"Biology", price:300},
    {id:3, book:"Chemistry", price:160},
    {id:4, book:"Math", price:280},
  ]

  return (
    <>
      <h1>React Core Concepts</h1>

<Library books ={books}></Library>

      {Teams.map((team) => (
        <Team key={team.id} team={team}></Team>
      ))}
      {/* ------------------------------------------------------- */}

      {actors.map((actor, index) => (
        <Actor key={index} actor={actor}></Actor>
        //ekhan a key use kora hyse..console a ekta error dekhano hosse seita remove korar jonno..tachara or kono kaj nei,
      ))}

      {singers.map(
        (singer) => (
          <Singer key={singer.id} singer={singer}></Singer>
        )

        //ekhan a key use kora hyse..console a ekta error dekhano hosse seita remove korar jonno..tachara or kono kaj nei
      )}

      {/* 
      <RToDo task="learn React" isDone={true} time={time}></RToDo>
      <RToDo task="Revise JS" isDone={false}></RToDo>
      <RToDo task="Take a shower" isDone={true} time="100"></RToDo> */}

      {/* <Food dish="briyani" price="320tk" discount={discount}></Food>
      <Food dish = "kacchi" price="300tk" discount={discount}></Food>
      <Food dish = "fried rice" price="250tk"></Food> */}

      {/* <ToDo task="Learn React" isDone ={true} duration ="100"></ToDo>
      <ToDo task="Learn Javascript" isDone ={false} duration ="50"></ToDo>
      <ToDo task={done} isDone={true} duration ="20"></ToDo> */}
      {/* <Person></Person>
      <Person></Person>
      <Kobutor></Kobutor>
      <Sports></Sports>
      <Kobutor></Kobutor>
      <Student></Student>
      <Developer name="emon" dept="cse"></Developer>
      <Developer name="atik" dept='ct'></Developer>
      <Developer name="tonni" dept='et'></Developer>

      <Device name="ASUS" price="2200"></Device>
      <Device name="Apple" price="23344"></Device>
      <Device name="Hp" price="2220"></Device>
      <Player name='Shakib Al Hassan' runs="5600"></Player>
      <Player name='Tamim' runs="5000"></Player>
      <Player name='Mushfique' runs="4500"></Player> */}
    </>
  );
}

function Person() {
  const age = 19;
  const name = "Atik Hassan";
  return (
    <div className="myName">
      <h1>
        Hi i am Atik {age} full name: {name}
      </h1>
      <p>
        i am learning react.i didnt even know how much hard it will be {age}
      </p>
    </div>
  );
}

function Kobutor() {
  const kobutors = 12;
  return (
    <>
      <p>Amr {kobutors} kobutor ache</p>
    </>
  );
}

function Sports() {
  return (
    <div
      style={{
        color: "green",
        backgroundColor: "sienna",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1>Cricket</h1>
      <p>I like cricket very much</p>
    </div>
  );
}

function Student() {
  const studentStyle = {
    color: "white",
    backgroundColor: "green",
    border: "5px",
    margin: "20px",
    padding: "16px",
    borderRadius: "20px",
  };
  return (
    <div style={studentStyle}>
      <h1>I am A student</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vitae
        quaerat itaque odit facilis deleniti sed quo possimus. Consectetur aut
        dolores odio quia dolor autem reiciendis laudantium dolorum quis?
        Sapiente.
      </p>
    </div>
  );
}

function Developer(props) {
  // console.log(props);

  return (
    <div style={{ border: "1px solid brown", margin: "10px" }}>
      <h3>Name: {props.name}</h3>
      <h3>Dept: {props.dept}</h3>
    </div>
  );
}

function Device({ name, price }) {
  return (
    <div
      style={{
        color: "crimson",
        border: "2px solid crimson",
        padding: "20px",
        margin: "10px",
      }}
    >
      <h2>i have many device</h2>

      <h3>Device Name: {name}</h3>
      <h3>Device price: {price}</h3>
    </div>
  );
}

// const {name,runs}={name: 'Shakib Al Hassan', runs: '5600'}

function Player({ name, runs }) {
  return (
    <div className="myName">
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  );
}
export default App;
