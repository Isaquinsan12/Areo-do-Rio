import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const [formState, setFormState] = useState({
    user_name: '',
    user_email: '',
    user_date_entrada: '',
    user_date_salida: '',
    message: ''
  });

  const handleForm = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const formRef = useRef();
  const [enviado, setEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEnviado(true); // Actualizar estado para mostrar mensaje de éxito
          setFormState({ // Limpiar el formulario
            user_name: '',
            user_email: '',
            user_date_entrada: '',
            user_date_salida: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <form ref={formRef} onSubmit={sendEmail} id='contenedor-reservas'>
        <label>Nombre</label>
        <input type="text" name="user_name" onChange={handleForm} value={formState.user_name} required />
        <label>Email</label>
        <input type="email" name="user_email" onChange={handleForm} value={formState.user_email} required />
        <label>Fecha de entrada</label>
        <input type="date" name="user_date_entrada" onChange={handleForm} value={formState.user_date_entrada} required />
        <label>Fecha de salida</label>
        <input type="date" name="user_date_salida" onChange={handleForm} value={formState.user_date_salida} required />
        <label>Mensaje</label>
        <textarea name="message" onChange={handleForm} value={formState.message} required />
        <input className='boton-enviar-formulario' type="submit" value="Enviar" />
      </form>
      {enviado && <div className='enviado-formulario'>¡El formulario se envió correctamente!</div>}
    </div>
  );
};

export default ContactUs;