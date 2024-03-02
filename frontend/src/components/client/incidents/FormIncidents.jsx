import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useEffect } from "react";
import { useIncidents } from "../../../hooks/useIncidents";

const FormIncidents = ({data, sendData}) => {

  const { useData } = useIncidents()

  const validators = Yup.object().shape({
    title: Yup.string().required('*El titulo es requerido').min(3).max(50),
    desc: Yup.string().required('*La descripcion es requerida').min(3).max(50),
  });

  const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(validators)});
  
  const submitForm = (dataForm) => {
    const dataI = {
      title: dataForm.title,
      desc: dataForm.desc,
      option: dataForm.option,
      data: data
    }
    console.log(dataI)
    sendData(dataI)
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1>Nuava incidencia</h1>
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="form-group">
                <select className="form-control" id="tipo"  {...register('option')}>
                  <option value="train">Tren</option>
                  <option value="chair">Silla</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="titulo">Título</label>
                <input type="text" className="form-control" id="titulo"
                 placeholder="Ingrese el título" {...register('title')} />
                <span>{errors.title?.message}</span>
              </div>
              <div className="form-group">
                <label htmlFor="descripcion">Descripción</label>
                <textarea className="form-control" id="descripcion" {...register('desc')} rows="3" placeholder="Ingrese la descripción"></textarea>
                <span>{errors.desc?.message}</span>
              </div>
              <button className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormIncidents;