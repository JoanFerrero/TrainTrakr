import { useCallback, useState } from "react";
import IncidentsService from "../services/IncidentsServices";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useContextHook } from "./useContextHook";

export const useIncidents = () => {
  const { dispathCustom } = useContextHook()
  const [incidentsT, setIncidentsT] = useState([])
  const [incidentsC, setIncidentsC] = useState([])
  const [ oneIncident, setOneIncident ] = useState();
  const navigate = useNavigate()

  const useSetIncidents = useCallback(() => {
    IncidentsService.getIncidentTrain()
      .then(({data, status}) => {
        if (status === 200) {
          setIncidentsT( data)
        }
    }).catch(e => {
      console.error(e);
    });

    IncidentsService.getIncidentChair()
      .then(({data, status}) => {
        if (status === 200) {
          setIncidentsC(data)
        }
    }).catch(e => {
      console.error(e);
    });
  }, [])

  const useGetIncident = useCallback((type, id) => {
    if(type === 'train') {
      IncidentsService.getOneIncidentTrain(id)
        .then(({data, status}) => {
          if (status === 200) {
            setOneIncident(data)
          }
      }).catch(e => {
        console.error(e);
      });
    }

    if(type === 'chair') {
      IncidentsService.getOneIncidentChair(id)
        .then(({data, status}) => {
          if (status === 200) {
            setOneIncident(data)
          }
      }).catch(e => {
        console.error(e);
      });
    }
  }, [])

  const useUpdateIncidents = useCallback((slug, dataI, type) => {
    if(type === 'train') {
      IncidentsService.putIncidentTrain(slug, dataI)
        .then(({data, status}) => {
          if (status === 200) {
            dispathCustom('EDIT_INCIDENTS_TRAIN', data, 'incidents')
            navigate('/dashboard/listincidents')
          }
      }).catch(e => {
        console.error(e);
      });
    }

    if(type === 'chair') {
      IncidentsService.putIncidentChair(slug, dataI)
        .then(({data, status}) => {
          if (status === 200) {
            dispathCustom('EDIT_INCIDENTS_CHAIR', data, 'incidents')
            navigate('/dashboard/listincidents')
          }
      }).catch(e => {
        console.error(e);
      });
    }
  }, [])

  const usePostIncidents = useCallback((data) => {
    if( data.option === 'chair') {
      const incidentC = {
        title: data.title,
        desc: data.desc,
        chair: data.data.chair.slug
      }
      IncidentsService.postIncidentChair(incidentC)
        .then(({data, status}) => {
          if (status === 200) {
            toast.success('Incidencia creada correctamente!!');
            window.location.reload();
          }
      }).catch(e => {
        console.error(e);
      });
    } else if(data.option === 'train') {
      const incidentT = {
        title: data.title,
        desc: data.desc,
        train: data.data.train.slug
      }
      IncidentsService.postIncidentTrain(incidentT)
        .then(({data, status}) => {
          if (status === 200) {
            toast.success('Incidencia creada correctamente!!');
            window.location.reload();
          }
      }).catch(e => {
        console.error(e);
      });
    }
  }, [])
  
  return { useUpdateIncidents, oneIncident, useGetIncident, useSetIncidents, incidentsC, incidentsT, usePostIncidents, useUpdateIncidents }
}