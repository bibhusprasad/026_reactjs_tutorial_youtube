
function College(props) {
  return (
    <div>
      <h2>College Component</h2>
      <h2>{props.userSubject}</h2>
      <h2>{props.userSubject[0]}</h2>
    </div>
  )
}

export default College;