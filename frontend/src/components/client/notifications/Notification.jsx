import { useState } from "react";
import { useNotification } from "../../../hooks/useNotification";

const Notification = ({data}) => {
  const {updateNotification} = useNotification();
  
  return (
    <>
      {data.seen === true ? (
        <div className="card border mb-3 bg-gray-600">
          <div className="card-body text-black">
            <h5 className="text-lg font-bold mb-2 text-white">{data.desc}</h5>
          </div>
        </div>
      ) : (
        <div className="card border-primary mb-3 bg-gray-800" onClick={() => updateNotification(data.id)}>
          <div className="card-body text-black">
            <h5 className="text-lg font-bold mb-2 text-white">{data.desc}</h5>
          </div>
        </div>
      )}
    </>
  )
}

export default Notification;