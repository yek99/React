import './App.css';
import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
//import Editar from './components/Editar';
//import Loguin from './components/Loguin';
//import Registroproductos from './components/Registroproductos';
//import Registroventas from './components/Registroventas';
//import Userlog from './components/Userlog';
import Pos from './components/Pos';
//import Loguin from './components/Loguin';
//import Ruta from './components/Ruta';
import Loguin from './components/Loguin';
//import Registroventas from './components/Registroventas';
 function App() {
      return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Pos} />

          <Route exact path="/Loguin" component={Loguin} />
          </Switch> 
      </BrowserRouter>       
      )
 }

export default App;
//export default Ruta;
