import React from 'react';
import '../styles/registroproductosboot.css';
import '../styles/registroprodustoestilos.css';



const Userlog = () => {
    return (
        <>
            <div className="container">

                <div className="row">
                    <form>
                        <h1>Registro usuarios</h1>
                        <br />
                        <fieldset>
                            <legent>Documento</legent>
                            <input type="number " className="form-control" id="item" />
                            <br />


                            <legent>Nombre</legent>
                            <input type="text" className="form-control" id="nombre" />
                            <br />

                            <legent>Rol</legent>
                            <input type="text" className="form-control" id="rol" />
                            <br />





                            <button type="button" id="insertar" className="btn btn-success">Registrar</button>
                            <button type="button" id="editar" className="btn btn-danger">Editar</button>
                            <button type="button" id="Listar" className="btn btn-success">Listar/Actualizar</button>
                            <button type="button" id="Eliminar" className="btn btn-danger">Eliminar</button>
                            <button type="button" id="crear" className="btn btn-success">Crear</button>

                        </fieldset>
                    </form>

                    <hr />
                    <h3>Lista de usuarios</h3>
                    <table className="table table-borderer table-hover" id="listaUsuarios" style="width:715px">

                    </table>
                </div>

            </div>
        </>
    );
};
export default Userlog;
