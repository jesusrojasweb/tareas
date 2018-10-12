import React, { Component } from "react";

//assets
import registro from '../media/registrar.jpg'
import agregarTarea from '../media/agregarTarea.jpg'
import proceso from '../media/proceso.jpg'
import listo from '../media/listo.jpg'

//estilos
import './index.css'

//components
import MenuLanding from './MenuLanding'
import Login from '../sesion/Login'
import Registro from '../sesion/Registro'
import Modal from '../Dashboard/Modal/'

class Landing extends Component{
    constructor(props){
        super(props)
        this.state ={
            modalRegistro: false,
            modalLogin: false,
        }
    }
    handleModalLogin = v => {
        this.setState({modalLogin: v})
    }
    handleModalRegistro = v => {
        this.setState({modalRegistro: v})
    }
    render(){
        return(
            <div className="Landing">
                <MenuLanding
                    registrar={this.handleModalRegistro}
                    login={this.handleModalLogin}
                />
                <div className="bienvenida">
                    <h1 className="title">Bienvenido a Se Productivo</h1>
                    <p className="descripcion">Se Productivo es una aplicación que está diseñada para ayudarte con la organización de tu día. Esta es muy fácil de usar.</p>
                    <p className="descripcion">Primero tienes que regístrate en el botón que está arriba a la derecha.</p>
                    <img src={registro} alt="registro"/>
                    <p className="descripcion">Para agregar una tarea es en el botón que está arriba y a la derecha que dice "Agregar Tarea". Llenas el formulario y se agregara automáticamente a tu lista de tareas pendientes.</p>
                    <img src={agregarTarea} alt="agregarTarea"/>
                    <p className="descripcion">Cuando la hora actual llega a la hora inicial de la tarea esta se pasa automáticamente a la columna de “En Proceso”</p>
                    <img src={proceso} alt="proceso"/>
                    <p className="descripcion">Y cuando la hora actual llega a la hora final de la tarea en proceso esta se va automáticamente a la columna de “Listo” </p>
                    <img src={listo} alt="listo"/>
                    <p className="descripcion">Al día siguiente, se borran todas las tareas de la columna "Listo" para empezar un nuevo día.</p>
                    <p className="descripcion">Por ahora la columna "Retraso" esta en desarrollo.</p>
                    <p className="descripcion">También puedes borrar las tareas en cualquier columna haciendo click o en la tarea.</p>
                    <p className="descripcion">¿Qué esperas para empezar?</p>
                    <button className="btn"
                        onClick={this.handleModalRegistro}
                    >Empezar Ahora</button>

                </div>
                <Modal 
                    visible={this.state.modalLogin}
                    close={this.handleModalLogin.bind(null, false)}
                    content={Login}
                />
                <Modal 
                    visible={this.state.modalRegistro}
                    close={this.handleModalRegistro.bind(null, false)}
                    content={Registro}
                />
            </div>
        )
    }
}

export default Landing;