import React,{ Component } from "react";

//estilos
import './AddTareas.css'

class AddTareas extends Component{
    render(){
        return(
            <div className="Modal-content">
                <form className="form" onSubmit={this.props.submit}>
                    <div className="grupo">
                        <label htmlFor="nombre" className="label">Nombre</label>
                        <input type="text" name="nombre" id="nombre" placeholder="Tarea" className="input"/>
                    </div>
                    <div className="grupo">
                        <label htmlFor="horaInicio" className="label">Hora Inicio</label>
                        <input type="time" name="horaInicio" id="horaInicio" className="input"/>
                    </div>
                    <div className="grupo">
                        <label htmlFor="horaFinal" className="label">Hora Final</label>
                        <input type="time" name="horaFinal" id="horaFinal" className="input"/>
                    </div>
                    <div className="boton">
                        <input type="submit" value="Añadir a las tareas" className="btn" />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTareas;