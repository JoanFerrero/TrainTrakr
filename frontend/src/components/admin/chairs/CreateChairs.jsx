import React from "react";
import FormChairs from "./FormChairs";
import { useChairs } from "../../../hooks/useChairs";

const CreateChairs = () => {

  const { useAddChairs } = useChairs()
  
  return (
    <div className="p-4 mt-4">
      <FormChairs type="create" sendData={(data) => useAddChairs(data)}/>
    </div>
  )
}

export default CreateChairs;