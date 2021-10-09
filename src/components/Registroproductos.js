import React from 'react';
import '../styles/registroproductosboot.css';
import '../styles/registroprodustoestilos.css';

const Registroproductos = () => {
    return (
        <>
            <div className="container">

                <div className="row">
                    <form>
                        <h1>Registro Productos</h1>
                        <br />
                        <fieldset>
                            <legent>Nombre</legent>
                            <input type="text " class="form-control" id="nombre" />
                            <br />


                            <legent>Marca</legent>
                            <input type="text" class="form-control" id="marca" />
                            <br />

                            <legent>Referencia</legent>
                            <input type="number " class="form-control" id="referencia" />
                            <br />
                            <legent>Precio</legent>
                            <input type="number " class="form-control" id="precio" />
                            <br />



                            <button type="button" id="insertar" class="btn btn-success">Registrar</button>
                            
                            {/* <button type="button" id="editar" class="btn btn-danger">Editar</button>
                            <button type="button" id="Listar" class="btn btn-success">Listar/Actualizar</button>
                            <button type="button" id="Eliminar" class="btn btn-danger">Eliminar</button> */}

                        </fieldset>
                    </form>

                    {/* // <hr />
                    // <h3>Lista de productos</h3>
                    // <table class="table table-borderer table-hover" id="listaVentas" style="width:715px">

                    // </table>   */}
                     
                </div>

            </div>
        </>
    );
};
export default Registroproductos;