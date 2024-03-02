import React, { useEffect } from "react";
import FormChairs from "./FormChairs";
import { useChairs } from "../../../hooks/useChairs";
import { useParams } from "react-router-dom";

const EditChairs = () => {
  const { slug } = useParams();
  const { useUpdateChair, useOneChair, oneChair } = useChairs()

  useEffect(() => {
    if(slug !== '') {
      useOneChair(slug.toString())
    }
  }, [])
  
  return (
    <div className="container mt-2">
      <div className="col-lg-12">
        <div className="card shadow mb-4">
          <a className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
            <h6 className="m-0 font-weight-bold text-primary">
              Edicion Silla
            </h6>
          </a>
          <div className="collapse show" id="collapseCardExample">
            <div className="col-xl-3 col-md-6 mb-4">
              <FormChairs chair={oneChair} type="update" sendData={(data) => useUpdateChair(slug, data)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditChairs;