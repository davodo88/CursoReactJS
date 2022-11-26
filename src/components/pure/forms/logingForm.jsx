/**
 * Componente que contiene formulario 
 * de autenticacion de ususarios
 */

import React, { useState } from 'react';

const LogingForm = () => {

  const initialCredentials = [
    {
      users: '',
      password:''
    }
  ]

  const [credential,  setCredentials] = useState(initialCredentials)


  return (
    <div>
      
    </div>
  );
}

export default LogingForm;
