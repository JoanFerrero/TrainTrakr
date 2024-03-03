import FormRegister from "../../components/client/login/FormRegister";
import { useAuth } from "../../hooks/useAuth";

const RegisterPage = () => {

  const { useRegisterUser } = useAuth();

  return (
    <>
      <section className="flex w-full items-start justify-center bg-[url('https://tailframes.com/images/squares-bg.webp')] bg-cover bg-center bg-no-repeat">
        <div className="m-auto flex max-w-screen-ms grow flex-col items-center justify-start gap-6 px-3 py-20 md:gap-12 md:px-12 lg:max-w-7xl lg:px-24">
          <FormRegister sendData={(data) => useRegisterUser(data)}/>
        </div>
      </section>
    </>
  )
}

export default RegisterPage;