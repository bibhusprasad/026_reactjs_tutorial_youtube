
import Wrapper from "./Wrapper";


function App() {

  return (
    <>
      <div>
         <Wrapper> 
            <h2>Hello User</h2>
         </Wrapper>
         <Wrapper> 
            <h2>Hello Admin</h2>
            <h3 style={{color: "red"}}>Please Login</h3>
         </Wrapper>
      </div>
    </>
  )
}

export default App;