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
    <div className="p-4 mt-4">
      <FormTrains train={oneTrain} type="update" sendData={(data) => useUpdateTrain(slug, data)}/>
    </div>
  )
}

export default EditTrains;