import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TrainsContext } from "../../../context/trains/TrainsProvider";
import { StationsContext } from "../../../context/stations/StationsProvider";
import { useContext } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";
import OptionTrain from "./OptionTrain";

const FormTrips= ({type, sendData}) => {
  const { StationsState } = useContext(StationsContext);
  const { TrainsState } = useContext(TrainsContext);
  const [selectedDate, setSelectedDate] = useState(null);

  const validators = Yup.object().shape({
    time: Yup.string().required('*The time is required').min(1).max(3),
  });

  const sendDataForm = (data) => {
    if(data.exit_station !== data.arrival_station) {
      const month = selectedDate.getMonth() + 1;
      const newObject = {
        "exit_station": data.exit_station,
        "arrival_station": data.arrival_station,
        "train": data.train,
        "date": selectedDate.getDate() + "/" + month + "/" + selectedDate.getFullYear(),
        "time": parseInt(data.time)
      }
      sendData(newObject)
    }
  }

  const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(validators)});

  return (
    <form onSubmit={handleSubmit(sendDataForm)}>
      <div className="form-group">
        <label>Station Exit</label>
        <select className="form-select" defaultValue="" {...register('exit_station')}>
          {StationsState.stations.map(station => (
            <>
              {station.status === 'activo' ? (
                <option key={station.id} value={station.slug}>{station.name}</option>
              ) : null}
            </>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Station Arrive</label>
        <select className="form-select" defaultValue="" {...register('arrival_station')}>
          {StationsState.stations.map(station => (
            <>
              {station.status === 'activo' ? (
                <option key={station.id} value={station.slug}>{station.name}</option>
              ) : null}
            </>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Tren</label>
        <select className="form-select" defaultValue="" {...register('train')}>
          {TrainsState.trains.map(train => (
            <OptionTrain train={train} key={train.id}/>
          ))}
        </select>
      </div>
      <DatePicker
        {...register('date')}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="form-control"
        dateFormat="dd/MM/yyyy"
      />
      <div className="form-group">
        <label>Time</label>
        <input type="number" className="form-control" {...register('time')} />
        <span>{errors.time?.message}</span>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
};

export default FormTrips;