import React from "react";
import FormStations from "./FormStations";
import { useStations } from "../../../hooks/useStations";

const CreateStations = () => {

  const { useAddStations } = useStations()
  
  return (
    <div className="p-4 mt-4">
      <FormStations type="create" sendData={(data) => useAddStations(data)}/>
    </div>
  )
}

export default CreateStations;