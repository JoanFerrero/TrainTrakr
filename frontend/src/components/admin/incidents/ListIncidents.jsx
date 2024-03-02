import { IncidentsContext } from "../../../context/Incidents/IncidentsProvider";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContextHook } from "../../../hooks/useContextHook";
const ListIncidents = () => {
  const { setDataInsidents } = useContextHook()
  const navigate = useNavigate();
  const { IncidentsState } = useContext(IncidentsContext);

  const changeStatus = (data, incident) => {
    console.log(id)
  }

  useEffect(() => {
    setDataInsidents()
  }, [])

  const redirects = {
    editT: (slug) => navigate('/dashboard/updateincidents/train/' + slug),
    editC: (slug) => navigate('/dashboard/updateincidents/chair/' + slug),
  }

  return (
    <>
      <h1>Trenes</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titulo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Estado</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {IncidentsState.incidentsTrain.map((trainI) => (
            <tr key={trainI.id}>
              <th scope="row">{trainI.id}</th>
              <td>{trainI.title}</td>
              <td>{trainI.desc}</td>
              <td className="btn-secondary">{trainI.status}</td>
              <button className="btn btn-secondary" onClick={() => redirects.editT(trainI.id)}>Change Status</button>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Sillas</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titulo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Estado</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {IncidentsState.incidentsChair.map((chairI) => (
            <tr key={chairI.id}>
              <th scope="row">{chairI.id}</th>
              <td>{chairI.title}</td>
              <td>{chairI.desc}</td>
              <td>{chairI.status}</td>
              <td className="btn-secondary">{chairI.status}</td>
              <button className="btn btn-secondary" onClick={() => redirects.editC(chairI.id)}>Change Status</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ListIncidents