import React, { Component } from "react";

//estilos
import './Login.css'

//components
import {login, resetPassword} from '../helpers/Auth'

class Login extends Component{
    constructor(...props){
        super(...props)
        this.state= {loginMessage: null}

        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.setMessage = this.setMessage.bind(this)
    }
    handleOnSubmit(e){
        e.preventDefault()
        let form = e.target
        login(form.email.value, form.clave.value)
            .catch(err => this.setMessage(`Error: ${err.message}`))
    }
    setMessage(err){
        return {loginMessage: err}
    }
    render(){
        return(
            <div className="Login">
                {
                     this.state.loginMessage && 
                    <div className="u-error">
                        <p>
                            {this.state.loginMessage}
                        </p>
                    </div> 
                }
                <form onSubmit={this.handleOnSubmit} className="formulario">
                    <input className="input" type="email" name="email" id="email" placeholder="email@mail.com"/>
                    <input className="input" type="password" name="clave" id="clave" placeholder="Contraseña"/>
                    <div className="boton">
                        <input type="submit" value="Iniciar Sesión" className="btn"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;