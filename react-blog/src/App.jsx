import { useState } from "react";
import User from "./User";

function App() {

  const [display, setDisplay] = useState(true);

  const showUserName = () => {
    setDisplay(!display)
  }

  return (
    <>
      <div>
         <h2>Toggle in React</h2>
         <button onClick={showUserName}>Show/Hide</button>
         {
          display ? <h2>Bibhu Samal</h2>:null
         }
         {
          !display ? <User />:null
         }
         
      </div>
    </>
  )
}

export default App;