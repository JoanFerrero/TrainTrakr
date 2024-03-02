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
    <div className="container mt-2">
      <div className="col-lg-12">
        <div className="card shadow mb-4">
          <a className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
            <h6 className="m-0 font-weight-bold text-primary">
              Edicion Status Incidencia
            </h6>
          </a>
          <div className="collapse show" id="collapseCardExample">
            <div className="col-xl-3 col-md-6 mb-4">
              <FormIncidents incident={oneIncident} type={type} sendData={(data) => useUpdateIncidents(slug, data, type)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditIncidents;