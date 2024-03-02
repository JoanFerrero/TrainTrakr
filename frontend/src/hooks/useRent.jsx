import { useCallback, useState } from "react";
import RentService from "../services/RentServices";

export const useRent = () => {
  const [rents, setRents] = useState([])
  const useCreateRent = useCallback(data => {
    RentService.postRent(data)
      .then(({data, status }) => {
        if (status === 200) {
          setRents(rents.push(data))
        }
    }).catch(e => {
      console.error(e);
    });
  }, [])

  const useSetRent = () => {
    RentService.getAllRentUser()
      .then(({data, status}) => {
        if (status === 200) {
          setRents(data)
        }
    }).catch(e => {
      console.error(e);
    });
  }
  
  return { useCreateRent, useSetRent, rents }
}