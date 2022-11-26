/**
 * Ejemplo uso del metodo de 
 * ciclo de vida en componente clase y tipo hook
 */
import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

  componentDidMount(){
    console.log('Comportamiento antes de renderizar')
  }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    );
  }
}

export const DidMountHook = () => {

  useEffect(() => {
    console.log( 'Comportamiento antes de renderizar')   
  }, []);


  return (
    <div>
      
    </div>
  )
}

