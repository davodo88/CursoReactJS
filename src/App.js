import logo from './logo.svg';
import './App.css';
import Ejemplo4 from './hooks/Ejemplo4';
import Clock from './components/container/cursoReact';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/*<Greeting name="David" ></Greeting>*/}
          {/*<Fgreeting name="David"/>*/}  
          {/*<TaskListComponent/> */}   
          {/*<ContactsList/>*/}
          {/**Ejemplo uso de Hooks */}
          {/*<Ejemplo1/>*/}
          {/*<Ejemplo2/>*/}
          {/*<MiComponenteConContexto />*/}
          <div className='box'>
            <Ejemplo4 nombre={"David"}>
            <h3>
              contenido del props.children
            </h3>
          </Ejemplo4>
          <Ejemplo4 nombre={"Enzo"}>
            <h3>
              contenido del props.children
            </h3>
          </Ejemplo4>
          </div>
          <Clock />
      </header>
    </div>
  );
}

export default App;
