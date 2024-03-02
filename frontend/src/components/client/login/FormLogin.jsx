import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const FormLogin = ({sendData}) => {

  const validators = Yup.object().shape({
    email: Yup.string().required('*The email is required').min(3).max(50),
    password: Yup.string().required('*The password is required'),
  });

  const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(validators)});

  return (
    <form className="user" onSubmit={handleSubmit(sendData)}>
      <div className="form-group">
        <input type="email" className="form-control form-control-user"
          placeholder="Email" {...register('email')}/>
          <span>{errors.email?.message}</span>
      </div>
      <div className="form-group">
        <input type="password" className="form-control form-control-user"
          placeholder="Password" {...register('password')} />
          <span>{errors.password?.message}</span>
      </div>
      <button className="btn btn-primary btn-user btn-block">
        Login
      </button>
    </form>
  )
}

export default FormLogin;