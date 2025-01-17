import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Input from "./form/Input"

const Services = () => {
  const [services, setServices] = useState([])


  const handleSearch = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    let serviceList = [
      {
        id: 1,
        name: "service1",
        enable: true,
        minReplica: 0
      },
      {
        id: 2,
        name: "service2",
        enable: true,
        minReplica: 0
      },
      {
        id: 3,
        name: "service3",
        enable: false,
        minReplica: 1
      },
    ]

    setServices(serviceList)
  }, [])

  return(
    <>
    <div className="text-center">
      <h2>Services</h2>
      <hr />
      <div className="col">
        <Input title="Search" type="text" className="form-control" name="search" onChange={handleSearch}/>
      </div>
      <hr />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Enabled</th>
            <th>Min Replicas</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s) => (
            <tr key={s.name}>
              <td>
                <Link to={`/services/${s.id}`}>{s.name}</Link>
              </td>
              <td>{s.enable ? "Yes" : "No"}</td>
              <td>{s.minReplica}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Services