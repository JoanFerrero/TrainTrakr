import { useCallback } from "react"
import AuthService from "../services/AuthServices";
import toast from 'react-hot-toast';
import { useContextHook } from "./useContextHook";
import { useNavigate } from "react-router-dom";
import JwtService from "../services/JwtService";
import { useLocation } from 'react-router-dom';

export const useAuth = () => {

  const { dispathCustom } = useContextHook();
  const navigate = useNavigate()
  const location = useLocation();
  const urlParts = location.pathname.split('/');

  const useIsLoged = () => {
    if(localStorage.getItem('token')) {
      AuthService.getUser()
        .then(({ data, status }) => {
          if (status === 200) {
            localStorage.setItem('token', data.token);
            navigate('/' + urlParts[1]);
            dispathCustom("SET_TOKEN", data.token, "auth")
            dispathCustom("SET_USER", data.user, "auth")
            dispathCustom("SET_IS_AUTH", true, "auth");
            dispathCustom("SET_IS_ADMIN", data.user.type === 'admin', "auth");
          }
        }).catch(e => {
          console.error(e);
        });
    }
  }

  const useLoginUser = useCallback(data => {
    let userData = {};
    if (data.type_register === "google" || data.type_register === "github") {
      if( data.type_register === "github") {
        userData = {
          "email": data.providerData[0].email,
          "username": data.displayName,
          "password": "0",
          "type_register": data.type_register,
        }
      } else {
        userData = {
          "email": data.email,
          "username": data.displayName,
          "password": "0",
          "type_register": data.type_register,
        }
      }
    } else {
      userData = {
        "email": data.email,
        "username": data.displayName,
        "password": data.password,
        "type_register": 'email',
      }
    }
    console.log(userData)
    AuthService.loginUser(userData)
      .then(({ data, status }) => {
        if (status === 200) {
          localStorage.setItem('token', data.token);
          dispathCustom("SET_TOKEN", data.token, "auth")
          dispathCustom("SET_USER", data.user, "auth")
          dispathCustom("SET_IS_AUTH", true, "auth");
          dispathCustom("SET_IS_ADMIN", data.user.type === 'admin', "auth");
          toast.success('Login correcto!!');
          navigate('/');
        }
    }).catch(e => {
      console.error(e);
      toast.error('Correo o contraseña incorrecto!');
    });
  }, [])

  const useRegisterUser = useCallback(data => {
    let userData = {};
    if (data.type_register === "google" || data.type_register === "github") {
      if( data.type_register === "github") {
        userData = {
          "email": data.providerData[0].email,
          "username": data.displayName,
          "password": "0",
          "type_register": data.type_register,
        }
      } else {
        userData = {
          "email": data.email,
          "username": data.displayName,
          "password": "0",
          "type_register": data.type_register,
        }
      }
    } else {
      userData = {
        "email": data.email,
        "username": data.displayName,
        "password": data.password,
        "type_register": data.type_register,
      }
    }
    AuthService.registerUser(userData)
      .then(({ data, status}) => {
        if (status === 200) {
          //localStorage.setItem('token', data.token);
          //dispathCustom("SET_TOKEN", data.token, "auth");
          //dispathCustom("SET_USER", data.user, "auth");
          //dispathCustom("SET_IS_AUTH", true, "auth");
          //dispathCustom("SET_IS_ADMIN", data.user.type === 'admin', "auth");
          toast.success('Registro correcto!!');
          navigate('/login');
        }
    }).catch(e => {
      console.error(e);
      useLogOutUser();
      toast.error('Datos incorrecto!');
    });
  }, [])

  const useLogOutUser = useCallback(data => {
    dispathCustom("SET_TOKEN", '', "auth")
    dispathCustom("SET_USER", {}, "auth")
    dispathCustom("SET_IS_AUTH", false, "auth");
    dispathCustom("SET_IS_ADMIN", false, "auth");
    navigate('/')
    JwtService.destroyToken();
    toast.success('Cerrar sesion correcto!!')
  }, [])

  return { useLoginUser, useRegisterUser, useLogOutUser, useIsLoged }
}