
import { useState } from "react";

function App() {

  let fruit = "Apple";

  const handleFruit = () => {
    fruit = "Mango";
    console.log(fruit);
  }

  return (
    <>
      <div>
        <h1>State in React</h1>
        <h2>{fruit}</h2>
        <button onClick={handleFruit}>Change Fruit</button>
      </div>
    </>
  )
}

export default App;