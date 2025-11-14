
function Wrapper({children}) {

  return(
    <div style={{color:"blue", border:"5px solid green", width:"300px", margin:"5px"}}>
      {children}
    </div>
  )
}

export default Wrapper;