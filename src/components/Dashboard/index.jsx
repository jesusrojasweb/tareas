import React, { Component } from "react";
import firebase from 'firebase'

//estilos
import './index.css'

//components
import Dash from "./Dash";
import Search from './Search'
import Perfil from './Perfil'
import Modal from './Modal/'
import AddTareas from './AddTareas'

class Dashboard extends Component{

    constructor(props){
        super(props);

        this.state = {
            modalVisible: false,
            nombre: null,
            apellido: null,
            userId: firebase.auth().currentUser.email.split('.').join('')
        }
    }
    componentDidMount(){
        const userEmail = firebase.auth().currentUser.email
        const userId = userEmail.split('.').join('')
        this.userRef = firebase.database().ref(`users/${userId}`)
        this.userCallback = this.userRef.on('value', (snap)=>{
            this.setState({
                nombre: snap.val().info.nombre,
                apellido: snap.val().info.apellido,
                userId: userId
            })
        })
    }

    handleModal = v => {
            console.log(v)
            this.setState({modalVisible: v})
        }

    render(){
        return(
            <section className="Dashboard">
                <section className="header">
                    <Search />
                    <Perfil
                        nombre={this.state.nombre}
                        apellido={this.state.apellido}
                    />
                </section>
                <section className="agregar">
                    <button className="btn add"
                        onClick={this.handleModal.bind(null,true)}
                    >Agregar Tarea</button>
                </section>
                <Dash
                    userId={this.state.userId}
                />
                <Modal 
                    visible={this.state.modalVisible}
                    close={this.handleModal.bind(null, false)}
                    content={AddTareas}
                    userId={this.state.userId}
                />
            </section>
        )
    }
}

export default Dashboard ;