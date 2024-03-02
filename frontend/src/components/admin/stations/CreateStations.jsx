import React from "react";
import FormStations from "./FormStations";
import { useStations } from "../../../hooks/useStations";

const CreateStations = () => {

  const { useAddStations } = useStations()
  
  return (
    <div className="container mt-2">
      <div className="col-lg-12">
        <div className="card shadow mb-4">
          <a className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
            <h6 className="m-0 font-weight-bold text-primary">
              Creacion Estaciones
            </h6>
          </a>
          <div className="collapse show" id="collapseCardExample">
            <div className="col-xl-3 col-md-6 mb-4">
              <FormStations type="create" sendData={(data) => useAddStations(data)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateStations;