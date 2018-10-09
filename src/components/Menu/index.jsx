import React, {Component} from 'react'
import {
    Route,
    BrowserRouter as Router,
    Link,
    Redirect,
    Switch
  } from 'react-router-dom'

//estilos
import './index.css'

class Menu extends Component{
    render(){
        return(
            <Router>
                <section className="Menu">
                    <h1 className="nombre">Tareas</h1>
                    <ul className="menu">
                        <li className="item"><Link to="/"><span className="fas fa-home icono"></span><span>Inicio</span></Link></li>
                        <li className="item"><Link to="/task"><span className="fas fa-tasks icono"></span><span>Tareas</span></Link></li>
                        <li className="item"><Link to="/calendario"><span className="far fa-calendar-alt icono"></span><span>Calendario</span></Link></li>
                        <li className="item"><Link to="/roles"><span className="far fa-user icono"></span><span>Roles</span></Link></li>
                    </ul>
                </section>
            </Router>
        )
    }
}

export default Menu;