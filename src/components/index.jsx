import React, {Component} from 'react'
import Menu from './Menu';
import Dashboard from './Dashboard';

//estilos
import './index.css'
import './fontawesome-all.min.css'

class Tareas extends Component{
    render(){
        return(
            <div className="Tareas">
                <Menu/>
                <Dashboard/>
            </div>
        )
    }
}

export default Tareas;