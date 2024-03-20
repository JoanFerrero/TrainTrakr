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
    <div className="p-4 mt-4">
      <FormStations station={oneStation} type="update" sendData={(data) => useUpdateStation(slug, data)}/>
    </div>
  )
}

export default EditStations;