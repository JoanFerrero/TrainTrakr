import React, { useEffect } from "react";
import FormStations from "./FormStations";
import { useStations } from "../../../hooks/useStations";
import { useParams } from "react-router-dom";

const EditStations = () => {
  const { slug } = useParams();
  const { useUpdateStation, useOneStation, oneStation } = useStations()

  useEffect(() => {
    if(slug !== '') {
      useOneStation(slug.toString())
    }
  }, [])
  
  return (
    <div className="container mt-2">
      <div className="col-lg-12">
        <div className="card shadow mb-4">
          <a className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
            <h6 className="m-0 font-weight-bold text-primary">
              Edicion Estaciones
            </h6>
          </a>
          <div className="collapse show" id="collapseCardExample">
            <div className="col-xl-3 col-md-6 mb-4">
              <FormStations station={oneStation} type="update" sendData={(data) => useUpdateStation(slug, data)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditStations;