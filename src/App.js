import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import Editar from './components/Editar';
//import Loguin from './components/Loguin';
//import Registroproductos from './components/Registroproductos';
//import Registroventas from './components/Registroventas';
//import Userlog from './components/Userlog';
import Pos from './components/Pos';
//import Loguin from './components/Loguin';
import Ruta from './components/Ruta';
import Loguin from './components/Loguin';
 function App() {
      return (
        <BrowserRouter>
          <Pos/>
          <Ruta/>
         <Loguin/>
          
        </BrowserRouter>
      )
 }

export default App;
//export default Ruta;
