import React, {Component} from 'react'
import firebase from 'firebase'

class Pin extends Component{
    constructor(props){
        super(props)
        this.state = {
            tasks: this.props.tasks
        }
    }
    componentDidMount(){
        let {tasks} = this.state;

        this.props.db.on('child_added',snap =>{
            tasks.push({
                taskId: snap.key,
                taskContent: snap.val().tarea,
                inicio: snap.val().inicio,
                final: snap.val().final,
                dia: snap.val().dia
            })
            tasks.sort((a,b)=> a.inicio > b.inicio)
            this.setState({tasks})
        })
        this.props.db.on('child_removed', snap =>{
            for(let i = 0; i < tasks.length; i++){
                if(tasks[i].taskId == snap.key){
                    tasks.splice(i, 1)
                }
                this.setState({tasks})
            }
        })
    }


    render(){
        return(
            <div className="pin">
                <div className="header">
                    <h3 className="title">{this.props.title}</h3>
                </div>
                <div className="body">
                    {
                        this.props.tasks.map(task=>(
                            <div className="task" key={task.taskId} onClick={()=> (this.props.remove(task.taskId))}>
                                <span className="nombre">{task.taskContent}</span>
                                <span className="hora">{task.inicio.slice(0,5)}</span>
                            </div>

                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Pin;