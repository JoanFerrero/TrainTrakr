import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useEffect } from "react";

const FormTrains = ({train = {slug: '', name: '',desc: '', image: '', status: ''}, type, sendData}) => {
  const validators = Yup.object().shape({
    name: Yup.string().required('*Name is required').min(3).max(50),
    desc: Yup.string().required('*Desc is required'),
    image: Yup.string().required('*Image is required').min(3).max(100),
  });

  useEffect(() => {
    if (train.slug !== '') {
      setValue('name', train.name);
      setValue('desc', train.desc);
      setValue('image', train.image);
      setValue('status', train.status);
    }
  }, [train]);

  const { register, handleSubmit, setValue, formState: {errors}} = useForm({resolver: yupResolver(validators)});

  return (
    <form onSubmit={handleSubmit(sendData)}>
      <div className="form-group">
        <label>Nombre</label>
        <input type="text" className="form-control" {...register('name')} />
        <span>{errors.name?.message}</span>
      </div>
      <div className="form-group">
        <label>Descripcion</label>
        <input type="text" className="form-control" {...register('desc')} />
        <span>{errors.desc?.message}</span>
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
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
};

export default FormTrains;