import React, { Component } from "react";
import Dash from "./Dash";
import Search from './Search'

//estilos
import './index.css'

class Dashboard extends Component{
    render(){
        return(
            <section className="Dashboard">
                <Search />
                <Dash/>
            </section>
        )
    }
}

export default Dashboard ;