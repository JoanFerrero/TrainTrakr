import { useCallback, useState } from "react";
import ChairsService from "../services/ChairsServices";
import { useContextHook } from "./useContextHook";
import { useNavigate } from "react-router-dom";

export const useChairs = () => {
  const navigate = useNavigate()
  const { dispathCustom } = useContextHook();
  const [ oneChair, setOneChair ] = useState();

  const useAddChairs = useCallback(data => {
    const chair = {
      "name": data.name,
      "type": data.type,
      "image": data.image,
      "status": data.status,
      "train": Number(data.tren),
      "chair_number": 1
    }
    ChairsService.createChairs(chair)
      .then(({ data, status }) => {
        if (status === 200) {
          dispathCustom('ADD_CHAIRS', data, 'chairs')
          navigate('/dashboard/listchairs')
        }
    }).catch(e => {
      console.error(e);
    });
  }, [])

  const useOneChair = useCallback(slug => {
    ChairsService.getOneChairs(slug)
      .then(({data, status}) => {
        if (status === 200) {
          setOneChair(data)
        }
      }).catch(e => {
        console.error(e);
      });
  }, [])

  const useUpdateChair = useCallback((slug, data) => {
    ChairsService.updateOneChairs(slug, data)
      .then(({data, status}) => {
        if (status === 200) {
          dispathCustom('EDIT_CHAIR', data, 'chairs')
          navigate('/dashboard/listchairs')
        }
      }).catch(e => {
        console.error(e);
      });
  }, [])

  const useDeleteChair = (slug) => {
    ChairsService.deleteOneChairs(slug)
      .then(({data, status}) => {
        if (status === 200) {
          dispathCustom('DELETE_CHAIR', slug, 'chairs')
        }
      }).catch(e => {
        console.error(e);
      })
  }
  
  return { useAddChairs, oneChair, useOneChair, useUpdateChair, useDeleteChair }
}