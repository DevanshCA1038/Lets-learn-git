import React from "react";
import Intro from "./Components/Intro";

export default function App() {
  const name = "Devansh";
  return (
    <>
      <div>
        <h1>Name : {name }</h1>
      </div>
      <Intro rollno= '1910990061' name = 'Jajaja' pinkcolor ="pink"/>
    </>
  );
}
