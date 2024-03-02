import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useEffect, useContext } from "react";
import { TrainsContext } from "../../../context/trains/TrainsProvider";

const FormChairs = ({chair = {slug: '', name: '',desc: '', image: '', status: ''}, type, sendData}) => {
  const { TrainsState } = useContext(TrainsContext);

  const validators = Yup.object().shape({
    name: Yup.string().required('*Name is required').min(3).max(50),
    image: Yup.string().required('*Image is required').min(3).max(100),
  });

  useEffect(() => {
    if (chair.slug !== '') {
      setValue('name', chair.name);
      setValue('type', chair.type);
      setValue('image', chair.image);
      setValue('status', chair.status);
    }
  }, [chair]);

  const { register, handleSubmit, setValue, formState: {errors}} = useForm({resolver: yupResolver(validators)});

  return (
    <form onSubmit={handleSubmit(sendData)}>
      <div className="form-group">
        <label>Nombre</label>
        <input type="text" className="form-control" {...register('name')} />
        <span>{errors.name?.message}</span>
      </div>
      <div className="form-group">
        <label>Tipo</label>
        <select className="form-select" defaultValue="" {...register('type')}>
          <option value="basico">Basico</option>
          <option value="medio">Medio</option>
          <option value="premium">Premium</option>
        </select>
      </div>
      <div className="form-group">
        <label>Imagen</label>
        <input type="text" className="form-control" {...register('image')} />
        <span>{errors.image?.message}</span>
      </div>
      <div className="form-group">
        <label>Status</label>
        <select className="form-select" defaultValue="" {...register('status')}>
          <option value="activo">Activo</option>
          <option value="no activo">No Activo</option>
        </select>
      </div>
      <div className="form-group">
        <label>Tren</label>
        <select className="form-select" defaultValue="" {...register('tren')}>
          {TrainsState.trains.map(train => (
            <option key={train.id} value={train.id}>{train.name}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
};

export default FormChairs;