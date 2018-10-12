import React, { Component } from 'react'

//estilos
import './Registro.css'

//components
import {auth} from '../helpers/Auth'
 
class Registro extends Component{
    constructor(){
        super()
        this.state = { loginMessage: null }
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleOnSubmit(e){
        e.preventDefault()
        let form = e.target
        auth(form)
        .catch( err => this.setState( this.setMessage( `Error: ${err.message}` ) ) )
    }

    setMessage(err) {
        return { loginMessage: err }
    }
    render(){
        return(
            <div className="Registro">
                {
                    this.state.loginMessage &&
                    <div className="u-error">
                    <p>
                        {this.state.loginMessage}
                    </p>
                    </div>
                }
                <form onSubmit={this.handleOnSubmit} className="formulario">
                    <input className="input" type="text" name="nombre" id="nombre" placeholder="Nombre"/>
                    <input className="input" type="text" name="apellido" id="apellido" placeholder="Apellido"/>
                    <input className="input" type="email" name="email" id="email" placeholder="email@mail.com"/>
                    <input className="input" type="password" name="clave" id="clave" placeholder="Contraseña"/>
                    <div className="boton">
                        <input type="submit" value="Crear cuenta" className="btn"/>
                    </div>
                </form>
            </div>
        )
    }
}
 
export default Registro