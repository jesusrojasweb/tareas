import React, { Component } from 'react'

//estilos
import './MenuLanding.css'
 
class MenuLanding extends Component{
    render(){
        return(
            <div className="MenuLanding">
                <ul className="menu">
                    <li className="item">
                        <a href="#" onClick={this.props.registrar}>Registrar</a>
                    </li>
                    <li className="item">
                        <a href="#" onClick={this.props.login} className="btn">Iniciar Sesión</a>
                    </li>
                </ul>
            </div>
        )
    }
}
 
export default MenuLanding