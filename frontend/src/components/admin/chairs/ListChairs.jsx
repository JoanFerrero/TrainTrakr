import { useChairs } from "../../../hooks/useChairs";
import { useNavigate } from "react-router-dom";

const ListChairs = ({chairs}) => {
  const navigate = useNavigate();
  const { useDeleteChair } = useChairs();

  const redirects = {
    edit: (slug) => navigate('/dashboard/updatechairs/' + slug),
  }
  
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Tipo</th>
          <th scope="col">Estado</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {chairs.map((chair) => (
          <tr key={chair.id}>
            <th scope="row">{chair.id}</th>
            <td>{chair.name}</td>
            <td>{chair.type}</td>
            <td>{chair.status}</td>
            <td><button><a onClick={() => redirects.edit(chair.slug)}>Editar</a></button></td>
            <td><button onClick={() => useDeleteChair(chair.slug)}>Borrar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default ListChairs;