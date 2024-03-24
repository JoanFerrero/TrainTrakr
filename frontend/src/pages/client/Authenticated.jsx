import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth'


const Authenticated = () => {
  const { email } = useParams();
  const { changeActive } = useAuth();

  useEffect(() => {
    if (email) {
      changeActive(email)
    }
  }, [email])

  const ReturnHtml =
    email
      ?
        <>
          <h4 className='flex justify-center items-center text-black mt-4'>Authentificacion correcta.</h4>
          <div className="flex justify-center mt-10 h-screen">
            <div className="w-64 h-64 bg-green-500 flex justify-center items-center rounded-lg" data-testid="color">
              <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </>
      :
        <>
          <h4 className='flex justify-center items-center text-black mt-4'>Porfa revisa el correo.</h4>
          <div className="flex justify-center mt-10 h-screen">
            <div className="w-64 h-64 bg-red-500 flex justify-center items-center rounded-lg" data-testid="color">
              <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </>


  return (
    <div>
      {ReturnHtml}
    </div>
  )
}

export default Authenticated;