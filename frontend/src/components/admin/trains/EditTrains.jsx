import React, { useEffect } from "react";
import FormTrains from "./FormTrains";
import { useTrains } from "../../../hooks/useTrains";
import { useParams } from "react-router-dom";

const EditTrains = () => {
  const { slug } = useParams();
  const { useUpdateTrain, useOneTrain, oneTrain } = useTrains()

  useEffect(() => {
    if(slug !== '') {
      useOneTrain(slug.toString())
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
              <FormTrains train={oneTrain} type="update" sendData={(data) => useUpdateTrain(slug, data)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditTrains;