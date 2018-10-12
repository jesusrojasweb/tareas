import React, { Component } from "react";

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