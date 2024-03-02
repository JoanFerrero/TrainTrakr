import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useEffect } from "react";

const FormIncidents = ({incident = {id: '',status: ''}, type, sendData}) => {

  const validators = Yup.object().shape({
  });

  const { register, handleSubmit, setValue, formState: {errors}} = useForm({resolver: yupResolver(validators)});

  useEffect(() => {
    if (incident.id !== '') {
      setValue('status', incident.status);
    }
  }, [incident]);

  return (
    <form onSubmit={handleSubmit(sendData)}>
      <div className="form-group">
        <label>Status</label>
        <select className="form-select" defaultValue="" {...register('status')}>
          <option value="pending">Pending</option>
          <option value="in_progress">In progres</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
};

export default FormIncidents;