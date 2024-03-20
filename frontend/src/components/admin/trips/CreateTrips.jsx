import React from "react";
import FormTrips from "./FormTrips";
import { useTrips } from "../../../hooks/useTrips";

const CreateTrips = () => {

  const { useAddTrips } = useTrips()
  
  return (
    <div className="p-4 mt-4">
      <FormTrips type="create" sendData={(data) => useAddTrips(data)}/>
    </div>
  )
}

export default CreateTrips;