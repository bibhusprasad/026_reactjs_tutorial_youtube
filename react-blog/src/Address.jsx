
function Address(props) {

  return (
    <div>
      <hr/>
      <h2>Address Component</h2>
      <h2>City : {props.userAddress.city}</h2>
      <h2>State : {props.userAddress.state}</h2>
      <h2>Pin : {props.userAddress.pin}</h2>
    </div>
  )
}

export default Address;