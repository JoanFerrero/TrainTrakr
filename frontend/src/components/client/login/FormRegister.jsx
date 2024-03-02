import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const FormRegister = ({sendData}) => {

  const validators = Yup.object().shape({
    username: Yup.string().required('*The username is required').min(3).max(10),
    email: Yup.string().required('*The email is required').min(3).max(50),
    password1: Yup.string().required('*The password is required'),
  });

  const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(validators)});

  return (
    <form className="user" onSubmit={handleSubmit(sendData)}>
      <div className="form-group">
        <input type="username" className="form-control form-control-user"
          placeholder="Username"
          {...register('username')}/>
          <span>{errors.username?.message}</span>
      </div>
      <div className="form-group">
        <input type="email" className="form-control form-control-user" id="exampleInputEmail"
          placeholder="Email Address"
          {...register('email')}/>
          <span>{errors.email?.message}</span>
      </div>
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <input type="password" className="form-control form-control-user"
            id="exampleInputPassword" placeholder="Password"
            {...register('password1')}/>
        </div>
        <div className="col-sm-6">
          <input type="password" className="form-control form-control-user"
            id="exampleRepeatPassword" placeholder="Repeat Password"
            {...register('password2')}/>
        </div>
        <span>{errors.password1?.message}</span>
      </div>
      <button className="btn btn-primary btn-user btn-block">
          Register Account
      </button>
    </form>
  )
}

export default FormRegister;