/*Ejemplo de uso de Hook usestate
Crear componente tipo Funcftion y acceder a su estado
privado a traves de un hook , y ademas, poder modificarlo
*/


import React, { useState } from 'react';

const Ejemplo1 = () => {

  //valor inicial para un contador
  const valorInicial = 0

  //valor inial para una persona
  const personaInicial = {
    nombre : "David",
    email: "davodo88@gmail.com"
  }

  /**
   * VALORINICIAL y PERSONAINICIAL tienen que ser parte 
   * del estado del componente para poder gestionar
   * su cambio y que se vea reflejado en la vista del componente
   * 
   * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
   */


  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);


  /**
   * Funcion para actualizar el estado privado que contiene el contador
   */

  function incrementarContador(){
      // ? funcionParaCambiar(nuevoValor)
      setContador(contador +1)
  }

  /**
   * Funcion para actualizar el estado persona en el componente
   */

  function actualizarPersona(){
    setPersona(
      {
        nombre: "Enzo",
        email: "EnzoSanchez@gmail.com"
      }
    )
  }




  return (
    <div >
      <h1>***Ejemplo de useState()***</h1>
      <h2>Contador: {contador} </h2>
      <h2>Datos De La Persona:</h2>
      <h3>Nombre:{persona.nombre} </h3>
      <h3>Email:{persona.email} </h3>
      {/**Bloque de botones para actualizar el estado del componente */}
      <div>
        <button onClick={incrementarContador} >
          Incrementar contador
        </button>
        <button onClick={actualizarPersona}>
          Actualizar Persona
        </button>
      </div>
    </div>
  );
}

export default Ejemplo1;
