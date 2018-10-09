import React, { Component } from "react";

//estilos
import './index.css'

//components
import Dash from "./Dash";
import Search from './Search'
import Perfil from './Perfil'
import Modal from './Modal/'

class Dashboard extends Component{

    constructor(props){
        super(props);

        this.state = {
            modalVisible: false
        }
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
                    <Perfil />
                </section>
                <section className="agregar">
                    <button className="btn add"
                        onClick={this.handleModal.bind(null,true)}
                    >Agregar Tarea</button>
                </section>
                <Dash/>
                <Modal 
                    visible={this.state.modalVisible}
                    close={this.handleModal.bind(null, false)}
                />
            </section>
        )
    }
}

export default Dashboard ;