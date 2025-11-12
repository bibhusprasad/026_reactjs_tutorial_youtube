import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div>
        <h2>My First Application</h2>
        <Fruit />
        <Color />
      </div>
    </>
  )
}

function Fruit() {
  return(
    <h3>3Apple</h3>
  )
}

function Color() {
  return(
    <h3>Red</h3>
  )
}

export default App;