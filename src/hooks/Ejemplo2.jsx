/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import { cleanup } from '@testing-library/react';
import React, { useEffect, useRef, useState } from 'react';

const Ejemplo2 = () => {

  //Vamos a crear dos contadores distintos
  //cada uno en un estado diferente

  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  //Creamos referencia con useRef() para asociar variable
  // con un elemento de DOM del componente (vista HTML)
  const miRef = useRef();

  function incrementar1(){
      setContador1(contador1 + 1)
  }

  function incrementar2(){
      setContador2(contador2 + 1)
  }

  /**
   * Trabajando useEffect()
   * 
   * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
   * Cada vez que haya un cambio en el estado del componente
   * se ejecuta lo que hay dentro del useEffect()
   */

  //useEffect(()=>{
  // console.log('Cambio en el stado del componente')
  // console.log('Mostrando Referencia a elemento del DOM')
  // console.log(miRef)
  //})

  /**
   * ? CASO 2: Ejexcutar solo en cambio contador1
   * Cada vez que hay cambio en contaador1, 
   * se ejecutara el codigo de usEffect()
   * En caso de que cambie contador2, no habra ejecucion
   */

  //useEffect(() => {
  //  console.log('Cambio en el estado del contador1')
  //  console.log('Mostrando Referencia a elemento del DOM')
  //  console.log(miRef)
  //}, [contador1]);

  /**
   * ? CASO 2: Ejexcutar solo en cambio contador1 o contador2
   * Cada vez que hay cambio en contaador1, 
   * se ejecutara el codigo de usEffect()
   * En caso de que cambie contador2, no habra ejecucion
   */
  useEffect(() => {
    console.log('Cambio en el estado del contador1 / contador2')
    console.log('Mostrando Referencia a elemento del DOM')
    console.log(miRef)
  }, [contador1, contador2]);




  return (
    <div>
      <h1>*** Ejemplo de useState(), useRef() y useEffect() *** </h1>
      <h2>CONTADOR 1: {contador1} </h2>
      <h2>CONTADOR 2: {contador2} </h2>
      {/*Eemento referenciado */}
      <h4 ref={miRef}>
        ejemplo de elemento referenciado.
      </h4>
      <div>
        {/**Botones para cambniar los contadores */}
        <button onClick={incrementar1}>
          Incrementar contador 1
        </button>
        <button onClick={incrementar2} >
          Incrementar contador 2
        </button>
      </div>
    </div>
  );
}

export default Ejemplo2;
