import { useCallback, useState } from "react";
import TrainsService from "../services/TrainsServices";
import { useContextHook } from "./useContextHook";
import { useNavigate } from "react-router-dom";

export const useTrains = () => {
  const navigate = useNavigate()
  const { dispathCustom } = useContextHook()
  const [ oneTrain, setOneTrain ] = useState();

  const useAddTrains = useCallback(data => {
    const train = {
      "name": data.name,
      "desc": data.desc,
      "image": data.image,
      "status": data.status,
    }
    TrainsService.createTrains(train)
      .then(({ data, status }) => {
        if (status === 200) {
          dispathCustom('ADD_TRAIN', data, 'trains')
          navigate('/dashboard/listtrains')
        }
    }).catch(e => {
      console.error(e);
    });
  }, [])

  const useOneTrain = useCallback(slug => {
    TrainsService.getOneTrains(slug)
      .then(({data, status}) => {
        if (status === 200) {
          setOneTrain(data)
        }
      }).catch(e => {
        console.error(e);
      });
  }, [])

  const useUpdateTrain = useCallback((slug, data) => {
    TrainsService.updateOneTrains(slug, data)
      .then(({data, status}) => {
        if (status === 200) {
          dispathCustom('EDIT_TRAIN', data, 'trains')
          navigate('/dashboard/listtrains')
        }
      }).catch(e => {
        console.error(e);
      });
  }, [])

  const useDeleteTrain = (slug) => {
    TrainsService.deleteOneTrains(slug)
      .then(({data, status}) => {
        if (status === 200) {
          dispathCustom('DELETE_TRAIN', slug, 'trains')
        }
      }).catch(e => {
        console.error(e);
      })
  }
  
  return { useAddTrains, oneTrain, useOneTrain, useUpdateTrain, useDeleteTrain }
}