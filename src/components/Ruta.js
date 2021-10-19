import React from 'react';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import Loguin from './Loguin';
import Pos from './Pos';
import Registroproductos from './Registroproductos';
import Registroventas from './Registroventas';
import Userlog from './Userlog';
const Ruta = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Pos" component={Pos} />
         <Route exact path="/Registroproductos" component={Registroproductos} />
        <Route exact path="/Registroventas" component={Registroventas} />
        <Route exact path="/Userlog" component={Userlog} /> 
        <Route exact path="/" component={Loguin} />
      </Switch>
    </BrowserRouter>
  )
}
export default Ruta;
