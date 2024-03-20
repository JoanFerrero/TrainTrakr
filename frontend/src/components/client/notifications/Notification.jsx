import { useState } from "react";
import { useNotification } from "../../../hooks/useNotification";

const Notification = ({data}) => {
  const {updateNotification} = useNotification()

  return (
    <>
      {data.seen === true ? (
        <div className="card border mb-3">
          <div className="card-body text-primary">
            <h5 className="card-title">{data.desc}</h5>
          </div>
        </div>
      ) : (
        <div className="card border-primary mb-3" onClick={() => updateNotification(data.id)}>
          <div className="card-body text-primary">
            <h5 className="card-title">{data.desc}</h5>
          </div>
        </div>
      )}
    </>
  )
}

export default Notification;