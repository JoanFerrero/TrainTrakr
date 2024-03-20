import React from "react";
import { useTrains } from "../../../hooks/useTrains";
import FormTrains from "./FormTrains";

const CreateTrains = () => {

  const { useAddTrains } = useTrains()
  
  return (
    <div className="p-4 mt-4">
      <FormTrains type="create" sendData={(data) => useAddTrains(data)}/>
    </div>
  )
}

export default CreateTrains;