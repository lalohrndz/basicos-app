import React from 'react'
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7} from './components/Eventos';
import {MasSobreEventos} from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';

function App() {
  return (
  <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
        <section>
          <Componente msg="hola hola"/>
          <hr/>
          {/* https://jonmircha.com/react#componentes */}
          <Propiedades
          cadena="cadena de texto"
          numero={123}
          boleano={false}
          arreglo={[1,2,3]}
          objeto={{nombre:"lalo", correo:"edo.pstr@gmail.com"}}
          elementoReact={<i>Esto es un elemento React</i>}
          function={num => num * num}
          componenteReact={<Componente msg="Soy un componente pasado como prop"/>}
          />

          <Estado />

          <RenderizadoElementos/>

          <EventosES6/>
          <hr />
          <EventosES7/>
          <hr />
          <MasSobreEventos/>

          <hr />
          <ComunicacionComponentes/>
        </section>
      </header>
    </div>
  </>
  );
}

export default App;