
//default import 
import Login from "./UserComponent";
//multiple named imports
import { Profile, Settings, UserKey } from "./UserComponent";

function App() {
  return (
    <>
      <div>
        <h2>My First Application</h2>
        <Login />
        <Profile />
        <Settings />
        {UserKey}
      </div>
    </>
  )
}

export default App;