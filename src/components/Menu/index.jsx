import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom'

//estilos
import './index.css'

class Menu extends Component{
    render(){
        return(
            <section className="Menu">
                <h1 className="nombre">SeProductivo</h1>
                <ul className="menu">
                    <li className="item"><Link to="/"><span className="fas fa-home icono"></span><span>Inicio</span></Link></li>
                    {/* <li className="item"><Link to="/task"><span className="fas fa-tasks icono"></span><span>Tareas</span></Link></li>
                    <li className="item"><Link to="/calendario"><span className="far fa-calendar-alt icono"></span><span>Calendario</span></Link></li>
                    <li className="item"><Link to="/roles"><span className="far fa-user icono"></span><span>Roles</span></Link></li> */}
                </ul>
            </section>
        )
    }
}

export default Menu;