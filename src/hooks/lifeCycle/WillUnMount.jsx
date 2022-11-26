/**
 * Ejemplo uso componente WillUnMount para componente clase 
 * y para uso de hook en componente funcional
 * (cuando desaparece el componente)
 */



import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

  componentWillUnmount(){
    console.log('Comportamiento cuando desparace el componente')
  }

  render() {
    return (
      <div>
        <h1>WillUnMount</h1>
      </div>
    );
  }
}





export const WillUnMountHook = () => {

  useEffect(() => {
    //aqui no ponemos nada
    return () => {
      console.log('Comportamiento cuando desparace el componente')
    };
  }, []);

  return (
    <div>
      <h1>WillUnMount</h1>
    </div>
  )
}
