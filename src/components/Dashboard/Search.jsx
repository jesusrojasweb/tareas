import React, {Component} from 'react'

//estilos
import './Search.css'

class Search extends Component{
    render(){
        return(
            <section className="Search">
                <span className="fas fa-search icono"></span>
                <input type="search" name="search" id="search" placeholder="Buscar" className="input"/>
            </section>
        )
    }
}

export default Search;