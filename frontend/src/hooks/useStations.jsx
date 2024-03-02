import { useCallback, useState } from "react";
import StationsService from "../services/StationsServices";
import { useContextHook } from "./useContextHook";
import { useNavigate } from "react-router-dom";

export const useStations = () => {
  const navigate = useNavigate()
  const { dispathCustom } = useContextHook()
  const [ oneStation, setOneStation ] = useState();

  const useAddStations = useCallback(data => {
    const station = {
      "name": data.name,
      "desc": data.desc,
      "image": data.image,
      "status": data.status,
    }
    StationsService.createStations(station)
      .then(({ data, status }) => {
        if (status === 200) {
          dispathCustom('ADD_STATIONS', data, 'stations')
          navigate('/dashboard/liststations')
        }
    }).catch(e => {
      console.error(e);
    });
  }, [])

  const useOneStation = useCallback(slug => {
    StationsService.getOneStation(slug)
      .then(({data, status}) => {
        if (status === 200) {
          setOneStation(data)
        }
      }).catch(e => {
        console.error(e);
      });
  }, [])

  const useUpdateStation = useCallback((slug, data) => {
    StationsService.updateOneStation(slug, data)
      .then(({data, status}) => {
        if (status === 200) {
          dispathCustom('EDIT_STATION', data, 'stations')
          navigate('/dashboard/liststations')
        }
      }).catch(e => {
        console.error(e);
      });
  }, [])

  const useDeleteStation = (slug) => {
    StationsService.deleteOneStation(slug)
      .then(({data, status}) => {
        if (status === 200) {
          dispathCustom('DELETE_STATION', slug, 'stations')
        }
      }).catch(e => {
        console.error(e);
      })
  }
  
  return { useAddStations, oneStation, useOneStation, useUpdateStation, useDeleteStation }
}