import React, {Component} from 'react'
import { TimelineLite, CSSPlugin } from 'gsap/all';

//estilos
import './index.css'

class Modal extends Component{
    constructor(props){
        super(props);

        this.modalWrap = null;
        this.modalDialog = null;
        this.modalTween = new TimelineLite({paused: true});        
    }

    handleKeyDown = e =>{
        if(e.keyCode == 27) this.props.close();
    }

    componentDidMount(){
        this.modalTween
            .to(this.modalWrap, 0.01, {autoAlpha: 1})
            .to(this.modalDialog, 0.25, {y: 50, autoAlpha:1}, 0)
            .reversed(true)
            .paused(false);
    }
    componentDidUpdate(){
        if(this.props.visible){
            window.addEventListener('keydown', this.handleKeyDown);
        }
        else {
            window.removeEventListener('keydown', this.handleKeyDown);
        }
        this.modalTween.reversed(!this.props.visible)
    }

    render(){
        return(
            <div className="Modal"
                ref={div => this.modalWrap = div}
            >
                <div className="Modal-dialog"
                    ref={div => this.modalDialog = div}
                    >
                    <div className="cerrar">
                        <button
                            onClick={this.props.close}
                        ><span className="fas fa-times close"></span></button>
                    </div>
                    <div className="Modal-content">
                        <form className="form">
                            <div className="grupo">
                                <label htmlFor="nombre" className="label">Nombre</label>
                                <input type="text" name="nombre" id="nombre" placeholder="Tarea" className="input"/>
                            </div>
                            <div className="grupo">
                                <label htmlFor="hora-inicio" className="label">Hora Inicio</label>
                                <input type="time" name="hora-inicio" id="hora-inicio" className="input"/>
                            </div>
                            <div className="grupo">
                                <label htmlFor="hora-final" className="label">Hora Final</label>
                                <input type="time" name="hora-final" id="hora-final" className="input"/>
                            </div>
                            <div className="boton">
                                <input type="submit" value="Añadir a las tareas" className="btn" />
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Modal;