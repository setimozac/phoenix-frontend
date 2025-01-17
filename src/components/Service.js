import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Service = () => {
  const [service, setService] = useState({})
  let { id } = useParams()


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
    
    serviceList.forEach(element => {
      
      if (element.id == id) {
        setService(element)
        return
      }      
    });
  }, [id])
  return (
    <>
    <div className="text-center">
      <h2>{service.name}</h2>
      <hr />
      <p>Replicas: {service.minReplica}</p>
      <p>This service Is {service.enable ? "Enabled" : "Not Enabled"}</p>

    </div>
    </>
  )
}

export default Service