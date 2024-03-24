import emailjs from '@emailjs/browser';
import secrets from '../secrets';

const sendEmail = (data, type) => {

  if(type === 'contact') {
    const changeData = {
      "email": data.email,
      "username": data.username,
      "content": data.content,
    }
  
    emailjs.send(secrets.YOUR_SERVICE_ID,  secrets.YOUR_TEMPLATE_ID_CONTACT, changeData, secrets.YOUR_PUBLIC_KEY)
      .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
          console.log('FAILED...', error);
      });

  } else if (type === 'register') {
    const changeData = {
      "email": data.email,
      "username": data.username,
    }
    emailjs.send(secrets.YOUR_SERVICE_ID, secrets.YOUR_TEMPLATE_ID_REGISTER, changeData, secrets.YOUR_PUBLIC_KEY)
      .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
          console.log('FAILED...', error);
      });
  }
};

const EmailService = {
  sendEmail
};

export default EmailService;