import React from "react"

const CardTrains = ({train}) => {
  return (
    <>
      <div className="row g-0 bg-light position-relative mx-2">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img src="https://images.ctfassets.net/txbhe1wabmyx/1dcXeAwolNAngGDuglWeWi/af1087111417148113c2d7fb477d5fda/photo-1477959858617-67f85cf4f1df.jpg" className="w-100" alt="..." />
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <h5 className="mt-0">{train.name}</h5>
          <p>{train.desc}</p>
          <a className="stretched-link">Ver Tren</a>
        </div>
      </div>
    </>
  )
}

export default CardTrains;