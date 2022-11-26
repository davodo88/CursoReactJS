/**
 * Ejemplo de componente de tipo CLASE que dispone de los metodos
 * de ciclo de vida.
 */

import React, { Component } from 'react'
import propTypes from 'prop-types'

class LifeCicleExample extends Component {
  constructor(props){
    super(props)
    console.log('CONSTRUCTOR: Cuando se instancia el componente')
  }

  componentWillMount() {
    console.log('WILLMOUNT: Antes del montaje del componente')

  }
  componentDidMount(){
    console.log('DIDMOUNT: Justo en el montaje del componente, antes de renderizar')

  }
  componentWillReceiveProps(nextProps){


  }
  shouldComponentUpdate(){
    /**
     * controla si se acctualiza el componente o no
     */
    //  return  true / false
  }
  
  componentWillUpdate(nextProp, nextState){
    console.log('Justo antes de actualizar')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('Justo despues de actualizar')
  }
  componentWillUnmount(){
    console.log('Justo antes de desaparecer')
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
LifeCicleExample.propTypes = {

}
