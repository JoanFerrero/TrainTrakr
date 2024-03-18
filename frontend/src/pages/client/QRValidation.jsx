import { useEffect } from "react";
import { useRent } from "../../hooks/useRent";
import { useParams } from "react-router-dom";
import Validation from "../../components/client/validation/Validation";
import Loading from "../../components/client/Loading/Loading";

const QRValidation = () => {
  const { rents, useSetRent } = useRent();
  console.log(rents)
  const { slug } = useParams();
  console.log(slug)

  useEffect(() => {
    useSetRent();
  }, [])

  return (
    <>
      {rents !== undefined && rents.length > 0 ? (
        <>
        {rents.map((rent) => (
          <>
          {rent.id === +slug ?  (
            <>
              <Validation rent={rent}/>
            </>
          ) : null}
          </>
        ))}
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default QRValidation;