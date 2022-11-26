/**Ejemplo hooks
 * -useState
 * -useContext
 */


import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente1 
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null)

const Componente1 = () => {


    //Inicializamos un estado vacio que se rellenara con datos
    //del contexto del padre
  const state = useContext(miContexto)

  return (
    <div>
      <h1>
        El Token es: {state.token}
      </h1>
      {/**Pintamos componente 2 */}
      <Componente2
        
      />
    </div>
  );
}






const Componente2 = () => {

  const state = useContext(miContexto)

  return (
    <div>
      <h2>
        La sesion es: {state.sesion}
      </h2>
    </div>
  );
}



const MiComponenteConContexto = () => {

  const EstadoInicial = {
    token: '123456789',
    sesion: 1
  }

  //Creamos estado de este componente
  const [sessionData, setSessionData] = useState(EstadoInicial);

  function actualizarSesion(){
    setSessionData(
      {
        token: 'jtw23445432',
        sesion: sessionData.sesion + 1
      }
    )
  }

  return (
    <miContexto.Provider value={sessionData}>
      {/** Tod lo que esta qui dentro puede leer los datos de sessionData */}
      {/**Ademas, si se actualiza, los componentes de aqui, tambine se acctualizan */}
      <Componente1></Componente1>
      <button onClick={actualizarSesion} >Acctualizar Sesion</button>
    </miContexto.Provider>  
  );
}

export default MiComponenteConContexto;


