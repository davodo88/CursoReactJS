/**Ejemplo para entender props.Children */
import React from 'react'
import'./../index.css'

function Ejemplo4(props) {
  return (
    <div className='container'>
      <h1>***Ejemplo Children Props***</h1>
      <h2>
        NOMBRE: { props.nombre }
      </h2>
      {/**props.children pintara por defecto
      aquello que se encuentre entre las etiquetas de apertura/cierre 
      de nuestro props.children
       */}
    </div>
  )
}

export default Ejemplo4