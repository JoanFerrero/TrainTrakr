import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { signInWithPopup } from "firebase/auth";
import { auth, providerGitHub, providerGoogle } from "../../../services/FirebaseService";
import { useNavigate } from "react-router-dom";

const FormLogin = ({sendData}) => {
  const navigate = useNavigate();
  const validators = Yup.object().shape({
    email: Yup.string().required('*The email is required').min(3).max(50),
    password: Yup.string().required('*The password is required'),
  });

  const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(validators)});

  const getGoogleLog = () => {
    signInWithPopup(auth, providerGoogle)
      .then((data) => {
        data.user.type_register = "google";
        sendData(data.user)
      })
  }

  const getGithubLog = () => {
    signInWithPopup(auth, providerGitHub)
      .then((data) => {
        data.user.type_register = "github";
        sendData(data.user)
      })
  }

  return (
    <>
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <h2 className="text-3xl font-bold text-gray-800">Inicio de Sesión</h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(sendData)}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            {...register('email')}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="correo@gmail.com"
          />
          <span>{errors.email?.message}</span>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            {...register('password')}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Contraseña"
          />
          <span>{errors.password?.message}</span>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Iniciar Sesión
          </button>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <button type="button" onClick={() => navigate('/register')}
            className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-blue-700 stroke-white px-6 text-white hover:bg-blue-950 h-[42px] min-w-[42px] gap-2 disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100">
            <span>Register</span>
          </button>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <button type="button" onClick={getGithubLog}
            className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-blue-700 stroke-white px-6 text-white hover:bg-blue-950 h-[42px] min-w-[42px] gap-2 disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100">
            <span>GitHub</span>
          </button>
          <button type="button" onClick={getGoogleLog}
            className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg py-2 align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed bg-blue-700 stroke-white px-6 text-white hover:bg-blue-950 h-[42px] min-w-[42px] gap-2 disabled:bg-slate-100 disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-slate-100">
            <span>Google</span>
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default FormLogin;