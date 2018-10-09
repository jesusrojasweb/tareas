import React, {Component} from 'react'

//estilos
import './Dash.css'

class Dash extends Component{
    render(){
        return(
            <section className="Dash">
                <div className="pin">
                    <div className="header">
                        <h3 className="title">Tareas</h3>
                    </div>
                    <div className="body">
                        <div className="task"><span className="nombre">Programar</span><span className="hora">1:00 pm</span></div>
                        <div className="task"><span className="nombre">Programar</span><span className="hora">1:00 pm</span></div>
                        <div className="task"><span className="nombre">Programar</span><span className="hora">1:00 pm</span></div>
                        <div className="task"><span className="nombre">Programar</span><span className="hora">1:00 pm</span></div>
                        <div className="task"><span className="nombre">Programar</span><span className="hora">1:00 pm</span></div>
                    </div>
                </div>
                <div className="pin">
                    <div className="header">
                        <h3 className="title">En proceso</h3>
                    </div>
                    <div className="body">
                        <div className="task"><span className="nombre">Programar</span><span className="hora">1:00 pm</span></div>
                        <div className="task"><span className="nombre">Programar</span><span className="hora">1:00 pm</span></div>
                    </div>
                </div>
                <div className="pin">
                    <div className="header">
                        <h3 className="title">Retraso</h3>
                    </div>
                    <div className="body">
                        <div className="task"><span className="nombre">Programar</span><span className="hora">1:00 pm</span></div>
                        <div className="task"><span className="nombre">Programar</span><span className="hora">1:00 pm</span></div>
                    </div>
                </div>
                <div className="pin">
                    <div className="header">
                        <h3 className="title">Listo</h3>
                    </div>
                    <div className="body">
                        <div className="task"><span className="nombre">Programar</span><span className="hora">1:00 pm</span></div>
                        <div className="task"><span className="nombre">Programar</span><span className="hora">1:00 pm</span></div>
                        <div className="task"><span className="nombre">Programar</span><span className="hora">1:00 pm</span></div>
                        <div className="task"><span className="nombre">Programar</span><span className="hora">1:00 pm</span></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Dash;