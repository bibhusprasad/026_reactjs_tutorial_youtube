import { useState } from "react";
import User from "./User";
import Address from "./Address";
import College from "./College";
import Student from "./Student";


function App() {

  let homeAddress = {
    city: "Cuttack",
    state: "Odisha",
    pin: 754204
  }

  let officeAddress = {
    city: "Bangalore",
    state: "Karnataka",
    pin: 560035
  }

  let subject = ["C", "C++", "Java", "Python"];

  const [stdname, setStdname] = useState("bibhu")

  function updateName() {
    setStdname("BIBHU");
  }

  return (
    <>
      <div>
         <h2>Props in React</h2>
         <User name="Bibhu Samal" age="34" email="test@gamil.com"/>
         <Address userAddress = {homeAddress} />
         <Address userAddress = {officeAddress} />
         <College userSubject = {subject} />
         <Student name = {stdname} />
         <button onClick={updateName}>Update Name</button>
      </div>
    </>
  )
}

export default App;