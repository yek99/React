import React from 'react';
import '../styles/POS.css';
import '../styles/principal.css';
import logo from '../assets/logo.png';

const Pos = () => {
    return (
        <>
            <header>

                <div class="header-content">

                    <div class="logo">
                        <h1>URBAN<b>HOUSE</b></h1>
                    </div>

                    <div class="menu" id="show-menu">

                        <nav>
                            <ul>
                                <li><a href="#"> <i class="fas fa-home"></i> yy</a></li>
                                <li><a href="#"> <i class="fab fa-youtube"> </i>xx</a></li>
                                <li class="menu-selected"><a href="POS.html" class="text-menu-selected">
                                    <i class="fas fa-file-alt"></i>POS</a></li>
                                <li><a href="#"> <i class="fas fa-headset"></i> zz</a></li>
                            </ul>
                        </nav>

                    </div>

                    <div id="ctn-icon-search">
                        <i class="fas fa-search" id="icon-search"></i>
                    </div>

                </div>

                <div id="icon-menu">
                    <i class="fas fa-bars"></i>
                </div>

            </header>


            <div id="ctn-bars-search">
                <input type="text" id="inputSearch" placeholder="Inserte CC, Nombre o ID de venta" />
            </div>

            <ul id="box-search">
                <li><a href="#"><i class="fas fa-search"></i></a></li>
                <li><a href="#"><i class="fas fa-search"></i></a></li>
                <li><a href="#"><i class="fas fa-search"></i></a></li>
                <li><a href="#"><i class="fas fa-search"></i></a></li>
                <li><a href="#"><i class="fas fa-search"></i></a></li>
                <li><a href="#"><i class="fas fa-search"></i></a></li>
                <li><a href="#"><i class="fas fa-search"></i></a></li>
                <li><a href="#"><i class="fas fa-search"></i></a></li>
            </ul>

            <div id="cover-ctn-search"></div>


            {/* <!--Portada--> */}

            <div class="container-all" id="move-content">


                <div class="blog-container-cover">
                    <div class="container-info-cover">
                        <h1>VENTAS URBAN HOUSE</h1>
                        <p>Sistema habilitado para ingresar, Buscar, actualizar y consultar ventas</p>
                    </div>
                </div>

                <div class="container-post">

                    <input type="radio" id="USUARIOS" name="categories" value="USUARIOS" checked />
                    <input type="radio" id="ADMINISTRADORES" name="categories" value="ADMINISTRADORES" />
                    <input type="radio" id="VENTAS" name="categories" value="VENTAS" />
                    <input type="radio" id="PRODUCTOS" name="categories" value="PRODUCTOS" />
                    <input type="radio" id="..." name="categories" value="..." />
                    <input type="radio" id="...." name="categories" value="...." />
                    <input type="radio" id="....." name="categories" value="....." />

                    <div class="container-category">
                        <label for="USUARIOS">USUARIOS</label>
                        <label for="ADMINISTRADORES">ADMINISTRADORES</label>
                        <label for="VENTAS">VENTAS</label>
                        <label for="PRODUCTOS">PRODUCTOS</label>
                        <label for="...">...</label>
                        <label for="....">....</label>
                        <label for=".....">.....</label>
                    </div>

                    <div class="posts">

                        <div class="post" data-category="x">

                            <div class="ctn-img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>ARTICULO 1</h2>
                            <span>nueva coleccion</span>
                            <ul class="ctn-tag">
                                <li>ROPA</li>
                                <li>URBAN</li>
                                <li>PARA TI</li>
                            </ul>
                            <a href="#"><button>Leer más</button></a>

                        </div>

                        <div class="post" data-category="y">

                            <div class="ctn-img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>ARTICULO 2</h2>
                            <span>nueva coleccion</span>
                            <ul class="ctn-tag">
                                <li>ROPA</li>
                                <li>URBAN</li>
                                <li>PARA TI</li>
                            </ul>
                            <a href="#"><button>Leer más</button></a>

                        </div>

                        <div class="post" data-category="JS">

                            <div class="ctn-img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>ARTICULO 3</h2>
                            <span>nueva coleccion</span>
                            <ul class="ctn-tag">
                                <li>ROPA</li>
                                <li>URBAN</li>
                                <li>PARA TI</li>
                            </ul>
                            <a href="#"><button>Leer más</button></a>

                        </div>

                        <div class="post" data-category="JS NODEJS VUE">

                            <div class="ctn-img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>ARTICULO 4</h2>
                            <span>nueva coleccion</span>
                            <ul class="ctn-tag">
                                <li>ROPA</li>
                                <li>URBAN</li>
                                <li>PARA TI</li>
                            </ul>
                            <a href="#"><button>Leer más</button></a>

                        </div>

                        <div class="post" data-category="CSS">

                            <div class="ctn-img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>ARTICULO 5</h2>
                            <span>nueva coleccion</span>
                            <ul class="ctn-tag">
                                <li>ROPA</li>
                                <li>URBAN</li>
                                <li>PARA TI</li>
                            </ul>
                            <a href="#"><button>Leer más</button></a>

                        </div>

                        <div class="post" data-category="PHP">

                            <div class="ctn-img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>ARTICULO 6</h2>
                            <span>nueva coleccion</span>
                            <ul class="ctn-tag">
                                <li>ROPA</li>
                                <li>URBAN</li>
                                <li>PARA TI</li>
                            </ul>
                            <a href="#"><button>Leer más</button></a>

                        </div>

                        <div class="post" data-category="CSS NODEJS">

                            <div class="ctn-img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>ARTICULO 7</h2>
                            <span>nueva coleccion</span>
                            <ul class="ctn-tag">
                                <li>ROPA</li>
                                <li>URBAN</li>
                                <li>PARA TI</li>
                            </ul>
                            <a href="#"><button>Leer más</button></a>

                        </div>




                    </div>

                </div>


                <div class="container-footer">

                    <footer>
                        <div class="logo-footer">
                            <img src={logo} alt="" />
                        </div>

                        <div class="redes-footer">
                            <a href="#"><i class="fab fa-facebook-f icon-redes-footer"></i></a>
                            <a href="#"><i class="fab fa-google-plus-g icon-redes-footer"></i></a>
                            <a href="#"><i class="fab fa-instagram icon-redes-footer"></i></a>
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
