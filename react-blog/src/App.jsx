
import { useState } from "react";
import Counter from "./Counter";

function App() {

  //fruit is a state variable
  //setFruit is a function to update the state variable
  const [fruit, setFruit] = useState("Apple");

  const handleFruit = () => {
    setFruit("Mango");
  }

  return (
    <>
      <div>
        <h1>State in React</h1>
        <h2>{fruit}</h2>
        <button onClick={handleFruit}>Change Fruit</button>
        <Counter /> 
      </div>
    </>
  )
}

export default App;