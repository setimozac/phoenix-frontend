import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Input from "./form/Input"
import Checkbox from "./form/Checkbox"

const Services = () => {
  const [services, setServices] = useState([])
  const [updatedServices, setUpdatedServices] = useState([])
  const [searchResult, setSearchResult] = useState([])


  const handleSearch = (event) => {
    event.preventDefault()

    const val = event.target.value

    console.log(val)
  
    if (val === "") {
      setSearchResult(services)
    }else {
      setSearchResult(services.filter((item) => item.name.toLowerCase().includes(val)))
    }
    console.log(searchResult)
    
  }

  useEffect(() => {
    const headers = new Headers()
    headers.append("Content-Type", "Application/json")
    const requestOptions = {
      Headers: headers,
      method: "GET"
    }
    fetch("/services", requestOptions)
      .then(data => data.json())
      .then(data => {
        data.forEach(element => {
          element["isChecked"] = false
        });
        setServices(data)
        setSearchResult(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const checkboxChange = (id) => {
    setServices((services) => 
      services.map((item) => 
        item.id === id ? {...item, isChecked: !item.isChecked} : item
      )
    )

    setSearchResult((services) => 
      services.map((item) => 
        item.id === id ? {...item, isChecked: !item.isChecked} : item
      )
    )
    
  }

  const updateServices = (event) => {
    event.preventDefault()
    
    setUpdatedServices([])
    searchResult.map(item => 
      item.isChecked ? updatedServices.push(item) : ""
      )
    setUpdatedServices(updatedServices)
    console.log(JSON.stringify(updatedServices))
    updatedServices.map(item => 
      item.uiEnabled = !item.uiEnabled
      )
    // console.log(JSON.stringify(updatedServices))
    // setUpdatedServices([])
    
    const headers = new Headers()
    headers.append("Content-Type", "Application/json")
    const requestOptions = {
      Headers: headers,
      method: "PUT",
      body: JSON.stringify(updatedServices)
    }
    // console.log(JSON.stringify(updatedServices))
    fetch("/services/update", requestOptions)
    setUpdatedServices([])
    //   .then()

    resetCheckboxes()
  }

  const resetCheckboxes = () => {
    setServices((services) => 
      services.map((item) => 
        item = {...item, isChecked: false}
      )
    )
    setSearchResult((services) => 
      services.map((item) => 
        item = {...item, isChecked: false}
      )
    )
  }

  return(
    <>
    
      <div className="text-center">
        <h2>Services</h2>
        <hr />
        <div className="col form-control">
          <Input title="" type="text" className="col-10" name="search" onChange={handleSearch}/>
          {/* <button type="submit" className="btn btn-primary col-2">search</button> */}
        </div>
        <hr />
        <form onSubmit={updateServices}>
          <div className="form-group" >
            <button type="submit" className="btn btn-primary">Update</button>
            <table className="table table-striped table-hover">
              
              <thead>
                <tr>
                  <th></th>
                  <th>Service Name</th>
                  <th>Namespace</th>
                  <th>Status</th>
                  <th>Deployment Replicas</th>
                  <th>Live Replicas</th>
                </tr>
              </thead>
              <tbody>
                {services && searchResult.map((s) => (
                  <tr key={s.name}>
                    <td>
                      <Checkbox id={s.id} disabled={!s.enabled} checked={s.isChecked} onChange={() => checkboxChange(s.id)} />
                    </td>
                    <td>
                      <Link to={`/services/${s.id}`}>{s.name}</Link>
                    </td>  
                    <td>{s.metadata.namespace}</td>
                    <td>{s.uiEnabled ? "Down" : "Up"}</td>
                    <td>{s.minReplica}</td>
                    <td>{s.uiEnabled ? 0 : s.minReplica}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    
    </>
  )
}

export default Services