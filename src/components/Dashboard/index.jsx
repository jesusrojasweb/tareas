import React, { Component } from "react";
import Dash from "./Dash";

//estilos
import './index.css'

class Dashboard extends Component{
    render(){
        return(
            <section className="Dashboard">
                <Dash/>
            </section>
        )
    }
}

export default Dashboard ;