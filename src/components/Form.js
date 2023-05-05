import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import check from '../images/checkmark.png';

const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;

function Form() {
  const form = useRef();
  const [isSend, setIsSend] = useState(false);
  // const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((response) => {
        setIsSend(true);
        console.log(response);
      }, (error) => {
        // setError(true);
        console.log(error);
      });
  };

  return (
    isSend ? 
    <>
    <h1 className="sm:text-md lg:text-lg md:text-lg text-violet-900 text-center">
      Obrigada pela mensagem.
      <br/>
      Responderei o mais breve possível.
    </h1>
    <img src={check} alt="Símbolo de check, que indica que o e-mail foi enviado com sucesso." className='h-2/5 md:w-1/4 lg:w-15 sm:w-1/5 mx-auto'/>
    </>
      : (
      <form ref={form} onSubmit={sendEmail} className='w-full h-full flex flex-col justify-around items-center'>
        <label htmlFor="user_name" className="text-center">Nome</label>
        <input type="text" name="user_name" id="user_name" className="w-3/4 px-1 rounded-md text-center"/>
        <label htmlFor="user_email" className="text-center">E-mail</label>
        <input type="email" name="user_email" id="user_email" className="w-3/4 px-1 rounded-md text-center"/>
        <label htmlFor="message" className="text-center">Mensagem</label>
        <textarea name="message" id="message"  className="w-3/4 h-2/6 px-1 rounded-md"/>
        <input type="submit" value="Enviar" className="semibold bg-violet-400 w-2/5 rounded-md text-stone-50 cursor-pointer px-2"/>
      </form>
      )
  );
};

export default Form;