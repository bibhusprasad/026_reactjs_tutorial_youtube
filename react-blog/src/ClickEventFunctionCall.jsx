
function ClickEventFunctionCall() {

    function callFun() {
      alert("Button Clicked");
    }

    function fruit(name) {
      alert("You selected: " + name);
    }

    const vegetable = (name) => {
      alert("You selected a vegetable: " + name);
    }

    return(
        <div>
          <button onClick={callFun}>Click Me</button>
          <button onClick={() => fruit('Mango')}>Mango</button>
          <button onClick={() => vegetable('Potato')}>Potato</button>
        </div>
    )
}

export default ClickEventFunctionCall;