import React, {Component} from 'react'
import firebase from 'firebase'

//estilos
import './Dash.css'

//components
import Pin from './Pin/'

class Dash extends Component{
    constructor(props){
        super(props)
        this.state = {
            tasks: [],
            proceso: [],
            retraso: [],
            listo: [],
            date: new Date,
            hora: null,
            minutos: null,
            segundos: null,
            tiempo: null
        }
        this.dbTask = firebase.database().ref('tasks')
        this.dbProceso = firebase.database().ref('proceso')
        this.dbRetraso = firebase.database().ref('retraso')
        this.dbListo = firebase.database().ref('listo')
        this.reloj = this.reloj.bind(this)
        this.removeTask = this.removeTask.bind(this)
        this.removeProceso = this.removeProceso.bind(this)
        this.removeRetraso = this.removeRetraso.bind(this)
        this.removeListo = this.removeListo.bind(this)
        this.handleProceso = this.handleProceso.bind(this)
    }
    componentDidMount(){
        this.reloj()
    }
    handleProceso(proceso){
        this.dbProceso.push().set({
            tarea: proceso.taskContent,
            inicio: proceso.inicio,
            final: proceso.final
        })
        alert('Tienes una tarea en proceso')
    }
    handleListo(listo){
        this.dbListo.push().set({
            tarea: listo.taskContent,
            inicio: listo.inicio,
            final: listo.final
        })
        alert('Tienes una tarea terminada')
    }
    reloj(){
        setInterval(()=>{
            let date = new Date
            let minutos = this.state.date.getMinutes()
            if(minutos < 10){
                minutos = `0${minutos}`
            }
            this.setState({
                date,
                hora: this.state.date.getHours(),
                minutos: minutos,
                segundos: this.state.date.getSeconds(),
                tiempo: `${this.state.hora}:${this.state.minutos}:${this.state.segundos}`
            })
            for(let i = 0; i < this.state.tasks.length; i++){
                if(this.state.tasks[i].inicio <= this.state.tiempo){
                    this.handleProceso(this.state.tasks[i])
                    this.removeTask(this.state.tasks[i].taskId)
                }
            }
            for(let i = 0; i < this.state.proceso.length; i++){
                if(this.state.proceso[i].final <= this.state.tiempo){
                    this.handleListo(this.state.proceso[i])
                    this.removeProceso(this.state.proceso[i].taskId)
                }
            }
        }, 1000)
    }
    removeTask(taskId){
        this.dbTask.child(taskId).remove();
    }
    removeProceso(taskId){
        console.log(taskId)
        console.log(this.dbProceso)
        this.dbProceso.child(taskId).remove();
    }
    removeRetraso(taskId){
        this.dbRetraso.child(taskId).remove();
    }
    removeListo(taskId){
        this.dbListo.child(taskId).remove();
    }
    render(){
        return(
            <section className="Dash">
                <Pin 
                    title="Tareas"
                    tasks={this.state.tasks}
                    remove={this.removeTask}
                    db={this.dbTask}
                />
                <Pin
                    title="En proceso"
                    tasks={this.state.proceso}
                    remove={this.removeProceso}
                    db={this.dbProceso}
                />
                <Pin
                    title="Retraso"
                    tasks={this.state.retraso}
                    remove={this.removeRetraso}
                    db={this.dbRetraso}
                />
                <Pin 
                    title="Listo"
                    tasks={this.state.listo}
                    remove={this.removeListo}
                    db={this.dbListo}
                />
            </section>
        )
    }
}

export default Dash;