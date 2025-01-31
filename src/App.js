import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import Alert from "./components/Alert"


const App = function() {
  const [jwtToken, setJwtToken] = useState("dummy-token")

  const [alertMsg, setAlertMsg] = useState("not found")
  const [alertClassName, setAlertClassName] = useState("d-none")
  
  return(
    <> 
    <div className="container">
      <div className='row'>
        <div className='col'>
          <h1 className="mt-3">Phoenix</h1>
          <h5>Env Manager</h5>
        </div>

        <Alert message={alertMsg} className={alertClassName} />
        <div className="col text-end">
          <span className="badge bg-success">User name</span>
        </div>
        <hr className="mb-3"/>
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
            <Link to="/" className="list-group-item list-group-item-action">Home</Link>
            {jwtToken !== ""  &&
            <>
            <Link to="/services" className="list-group-item list-group-item-action">Services</Link>
            <Link to="/events" className="list-group-item list-group-item-action">Events</Link>
            </>             
            }
            </div>        
          </nav>
        </div>
        <div className="col-md-10">
          <Outlet context={{
            jwtToken, // can be used in other components
            setJwtToken, // can be used in other components like Login.js : const {setJwtToken} = useOutletContext();
            setAlertClassName, // setAlertClassName(alert-danger)
            setAlertMsg
          }}/>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App


// "proxy": "http://localhost:8080",