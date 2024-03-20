import FormIncidents from "./FormIncidents";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useIncidents } from "../../../hooks/useIncidents";

const EditIncidents = () => {
  const { type, slug } = useParams();
  const { useGetIncident, oneIncident, useUpdateIncidents } = useIncidents()

  useEffect(() => {
    if(slug !== '') {
      useGetIncident(type, slug)
    }
  }, [])

  return (
    <div className="p-4 mt-4">
      <FormIncidents incident={oneIncident} type={type} sendData={(data) => useUpdateIncidents(slug, data, type)}/>
    </div>
  )
}

export default EditIncidents;