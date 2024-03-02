import FormLogin from "../../components/client/login/FormLogin";
import { useAuth } from "../../hooks/useAuth";

const LoginPage = () => {

  const { useLoginUser } = useAuth();

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <img src="https://img.freepik.com/vector-premium/icono-tren_609277-3633.jpg" className="col-lg-6 d-none d-lg-block" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <FormLogin sendData={(data) => useLoginUser(data)}/>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage;