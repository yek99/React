import React from 'react';
import '../styles/POS.css';
import '../styles/principal.css';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
//import link from 'react-router-dom';
import Loguin from './Loguin';
//import history from "history";
import { useHistory } from 'react-router';
const Pos = () => {
    const history = useHistory()
    const handleRedirect = (item) => {
        var identificador;
        identificador=prompt("Digite su identificacion: ");
        // en el 1 se colocaria la consulta de bd
        if (identificador==1)
        {
            history.push(item);
        }
        else
        {
            alert("Error: Usted no tiene acceso. ")
        }
        
        //<Link src={item}/>
       
      };
      const handleRedirectOut = (item) => {
        history.push(item);
      }

    return (
        <>
            <header>

                <div className="header-content">

                    <div className="logo">
                        <h1>URBAN<b>HOUSE</b></h1>
                    </div>

                    <div className="menu" id="show-menu">

                        <nav>
                            <ul>
                            
                             <li><a onClick={(e) => handleRedirect("/Registroproductos")} > <i className="fas fa-file-alt"> </i>Vendedor</a></li>
                                <li><a onClick={(e) => handleRedirect("/Userlog")} > <i className="fas fa-file-alt"> </i>Administrador</a></li>
                                 <li className="menu-selected"><a href="POS.html" className="text-menu-selected"/></li> 
                                <li ><a onClick={(e) => handleRedirect("/Registroventas")} > <i className="fas fa-file-alt"></i>Cliente</a></li>
                                <li><a onClick={(e) => handleRedirectOut("/")} > <i className="fas fa-headset"> </i>Log out</a></li>
                            </ul>
                        </nav>


                    </div>

                    <div id="ctn-icon-search">
                        <i className="fas fa-search" id="icon-search"></i>
                    </div>

                </div>

                <div id="icon-menu">
                    <i className="fas fa-bars"></i>
                </div>

            </header>


            <div id="ctn-bars-search">
                <input type="text" id="inputSearch" placeholder="Inserte CC, Nombre o ID de venta" />
            </div>

            <ul id="box-search">
                <li><a href="#"><i className="fas fa-search"></i></a></li>
                <li><a href="#"><i className="fas fa-search"></i></a></li>
                <li><a href="#"><i className="fas fa-search"></i></a></li>
                <li><a href="#"><i className="fas fa-search"></i></a></li>
                <li><a href="#"><i className="fas fa-search"></i></a></li>
                <li><a href="#"><i className="fas fa-search"></i></a></li>
                <li><a href="#"><i className="fas fa-search"></i></a></li>
                <li><a href="#"><i className="fas fa-search"></i></a></li>
            </ul>

            <div id="cover-ctn-search"></div>


            {/* <!--Portada--> */}

            <div className="container-all" id="move-content">


                <div className="blog-container-cover">
                    <div className="container-info-cover">
                        <h1>VENTAS URBAN HOUSE</h1>
                        <p>Sistema habilitado para ingresar, Buscar, actualizar y consultar ventas</p>
                    </div>
                </div>

                <div className="container-post">

                    <input type="radio" id="USUARIOS" name="categories" value="USUARIOS" checked />
                    <input type="radio" id="ADMINISTRADORES" name="categories" value="ADMINISTRADORES" />
                    <input type="radio" id="VENTAS" name="categories" value="VENTAS" />
                    <input type="radio" id="PRODUCTOS" name="categories" value="PRODUCTOS" />
                    <input type="radio" id="..." name="categories" value="..." />
                    <input type="radio" id="...." name="categories" value="...." />
                    <input type="radio" id="....." name="categories" value="....." />

                    <div className="container-category">
                        <label for="USUARIOS">USUARIOS</label>
                        <label for="ADMINISTRADORES">ADMINISTRADORES</label>
                        <label for="VENTAS">VENTAS</label>
                        <label for="PRODUCTOS">PRODUCTOS</label>
                        <label for="...">...</label>
                        <label for="....">....</label>
                        <label for=".....">.....</label>
                    </div>

                    <div className="posts">

                        <div className="post" data-category="x">

                            <div className="ctn-img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>ARTICULO 1</h2>
                            <span>nueva coleccion</span>
                            <ul className="ctn-tag">
                                <li>ROPA</li>
                                <li>URBAN</li>
                                <li>PARA TI</li>
                            </ul>
                            <a href="#"><button>Leer más</button></a>

                        </div>

                        <div className="post" data-category="y">

                            <div className="ctn-img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>ARTICULO 2</h2>
                            <span>nueva coleccion</span>
                            <ul className="ctn-tag">
                                <li>ROPA</li>
                                <li>URBAN</li>
                                <li>PARA TI</li>
                            </ul>
                            <a href="#"><button>Leer más</button></a>

                        </div>

                        <div className="post" data-category="JS">

                            <div className="ctn-img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>ARTICULO 3</h2>
                            <span>nueva coleccion</span>
                            <ul className="ctn-tag">
                                <li>ROPA</li>
                                <li>URBAN</li>
                                <li>PARA TI</li>
                            </ul>
                            <a href="#"><button>Leer más</button></a>

                        </div>

                        <div className="post" data-category="JS NODEJS VUE">

                            <div className="ctn-img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>ARTICULO 4</h2>
                            <span>nueva coleccion</span>
                            <ul className="ctn-tag">
                                <li>ROPA</li>
                                <li>URBAN</li>
                                <li>PARA TI</li>
                            </ul>
                            <a href="#"><button>Leer más</button></a>

                        </div>

                        <div className="post" data-category="CSS">

                            <div className="ctn-img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>ARTICULO 5</h2>
                            <span>nueva coleccion</span>
                            <ul className="ctn-tag">
                                <li>ROPA</li>
                                <li>URBAN</li>
                                <li>PARA TI</li>
                            </ul>
                            <a href="#"><button>Leer más</button></a>

                        </div>

                        <div className="post" data-category="PHP">

                            <div className="ctn-img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>ARTICULO 6</h2>
                            <span>nueva coleccion</span>
                            <ul className="ctn-tag">
                                <li>ROPA</li>
                                <li>URBAN</li>
                                <li>PARA TI</li>
                            </ul>
                            <a href="#"><button>Leer más</button></a>

                        </div>

                        <div className="post" data-category="CSS NODEJS">

                            <div className="ctn-img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>ARTICULO 7</h2>
                            <span>nueva coleccion</span>
                            <ul className="ctn-tag">
                                <li>ROPA</li>
                                <li>URBAN</li>
                                <li>PARA TI</li>
                            </ul>
                            <a href="#"><button>Leer más</button></a>

                        </div>
                 </div>

                </div>


                <div className="container-footer">

                    <footer>
                        <div className="logo-footer">
                            <img src={logo} alt="" />
                        </div>

                        <div className="redes-footer">
                            <a href="#"><i className="fab fa-facebook-f icon-redes-footer"></i></a>
                            <a href="#"><i className="fab fa-google-plus-g icon-redes-footer"></i></a>
                            <a href="#"><i className="fab fa-instagram icon-redes-footer"></i></a>
                        </div>

                        <hr />
                        <h4>© 2021 UrbanHouse - Todos los Derechos Reservados</h4>

                    </footer>

                </div>

            </div>

            <script src="script.js"></script>
        </>
    );
};

export default Pos;
