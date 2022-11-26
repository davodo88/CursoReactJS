/**
 * Ejemplo de uso de metodo componentDidUpdate en componente
 * de clase y uso de hook en componente funcional
 */



import React, { Component, useEffect } from 'react'

export  class DidUpdate extends Component {

  componentDidUpdate(){
    console.log('Comportamiento con nuevos props o cambio de estado')
  }


  render() {
    return (
      <div>DidUpdate</div>
    )
  }
}



export const DidUpdateHook = () => {

  useEffect(() => {
    console.log('Comportamiento con nuevos props o cambio de estado')
  });


  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  );
}



