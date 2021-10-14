import './App.css';
import React from 'react';
import { BrowserRouter,Switch} from 'react-router-dom';
import Ruta from './components/Ruta';
 function App() {
      return (
      <BrowserRouter>
        <Switch>
        <Ruta/>
        </Switch> 
      </BrowserRouter>       
      )
 }
export default App;

