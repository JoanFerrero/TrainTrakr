import FormRegister from "../../components/client/login/FormRegister";
import { useAuth } from "../../hooks/useAuth";

const RegisterPage = () => {

  const { useRegisterUser } = useAuth();

  return (
    <>
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
             <img src="https://img.freepik.com/vector-premium/icono-tren_609277-3633.jpg" className="col-lg-5 d-none d-lg-block" />
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                  </div>
                  <FormRegister sendData={(data) => useRegisterUser(data)}/>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage;