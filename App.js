import logo from './logo.svg';
import './App.css';
import { useState } from "react";//importent while using state tag we need to import useState from react
// const name = "Rohit"
// const number= "3"

function App() {
  return (
    <div className="App">
            {/* <Counter/> */}
            <Moment/>
   </div>
  );
 }

// function Welcome(props) {
//  let day = "Wednesday";
//  console.log(props);
//  return(

//     <div>
//     <h1>welcome home buddies</h1>
//     <h2> thanks for comming</h2>
//     <h2> hello,{props.name}</h2>
//     <p> this is {day} </p>
//   </div>

//    );

// function Counter() {
//   const [like, setLike] = useState(1);
//   const [dislike, setDisLike] = useState(1);
//   return (
//     <div>
//       <button onClick={() => setLike(like + 1)}> 👍{like} </button>

//       <button onClick={() => setDisLike(dislike + 1)}>👎{dislike} </button>
//     </div>
//   );
// }

function Moment() {
  let like = 0;
  let dislike = 0;
  return (
    <div>
      <button
        onClick={() => {
          like = like + 1;
          console.log(like, "like");
        }}>

        Likes {like}
      </button>
      <button onClick={() => {
        dislike = dislike + 1;
      console.log(dislike, "dislike");
    }}>
    dislike{dislike}</button>

     </div>
   );
      }
  


export default App;
