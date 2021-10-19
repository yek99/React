import React from 'react';
import '../styles/loguin.css';
import logo from '../assets/logo.png';
import { useHistory } from 'react-router';


const Loguin = () => {

    const history = useHistory()
const handleRedirect = (item) => {

    history.push(item);
    //<Link src={item}/>
   
  };
    const verificar = () => {
        console.log("estoy dentro del metodo verificar");
        var password=document.getElementById("username").value;
       

        if(password.includes('@gmail'))
        {
        alert("Bienvenido usuario");
        handleRedirect("/Pos")
        }
        else{
        alert("Favor ingresar un correo de gmail")
        }          
    }
    return (

        <>

            <div className="login-box">
                <img src={logo} className="avatar" alt="Avatar Image" />
                <h1>Welcome</h1>
                <form>
                    <p>

                        <label for="username">Username</label>
                        <input id="username" type="text" placeholder="Enter @gmail" />
                    </p>

                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" />
                    <input type="submit"  value="Log In" onClick={() => verificar()}/>

                </form>

            </div>

        </>


    );
};
export default Loguin; 