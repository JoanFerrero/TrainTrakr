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
    <div className="p-4 mt-4">
      <FormChairs chair={oneChair} type="update" sendData={(data) => useUpdateChair(slug, data)}/>
    </div>
  )
}

export default EditChairs;