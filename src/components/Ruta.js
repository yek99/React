import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Loguin from './Loguin';
import Pos from './Pos';
//import Registroproductos from './components/Registroproductos';
//import Registroventas from './components/Registroventas';
//import Userlog from './components/Userlog';
const Ruta=() => {
     return (
       <Switch>
        <Route exact path="" component={Pos} />
        <Route exact path="/Loguin" component={Loguin} />
        
       </Switch>
     )
}
export default Ruta;