import React, { Component } from "react";

//estilos
import './Perfil.css'

//assets
import perfil from '../media/perfil-01.jpg'

class Perfil extends Component{
    render(){
        return(
            <div className="Perfil dropdown">
                <div className="boton">
                    <span className="icono fas fa-angle-down"></span>
                    <span className="nombre">Jesús Rojas</span>
                    <figure className="foto">
                        <img src={perfil} alt="perfil"/>
                    </figure>
                </div>
                <div className="dropwdown-content">
                    <a href="#">Perfil</a>
                    <a href="#">Cerrar Sesión</a>
                </div>
            </div>
        )
    }
}

export default Perfil;