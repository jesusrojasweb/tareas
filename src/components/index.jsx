import React, {Component} from 'react'
import {
  Route,
  BrowserRouter as Router,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import firebase from 'firebase'

//estilos
import './index.css'
import './fontawesome-all.min.css'

//components
import Menu from './Menu';
import Dashboard from './Dashboard';
import Landing from './Landing/'
import Calendario from './Calendario/'

const PrivateRoute = ({component: Component, authed, rest}) => ( //Ruta al estar autenticado
  <Route 
    {...rest}
    render={
      props => authed === true
      ? <Component {...props} />
      : <Redirect to='/' />
    }
  />
)

const PublicRoute = ({component: Component, authed, rest}) => ( //Ruta al no estar autenticado
  <Route
    {...rest}
    render={
      props => authed === false
      ? <Component {...props}/>
      : <Dashboard />
    }
  />
)

class Tareas extends Component{
    constructor(...props){
        super(...props)
        this.state = {
            uid: null,
            authed: false,
            loading: true,
            nombre: null,
            apellido: null
        }
    }
    componentDidMount(){
        console.log(firebase.auth())
        this.removeListener = firebase.auth().onAuthStateChanged(user => {
        if(user){
            let dbUser = firebase.database().ref().child(`users/${this.state.uid}/info`)
            this.setState({
                authed: true,
                loading: false,
                uid: user.uid,
                nombre: dbUser.nombre
            })
        }else{
            this.setState({
                loading: false,
                authed: false
            })
        }
        })
    }
    render(){
        return(
            <Router>
                <div className="Tareas">
                    <Menu/>
                        <Switch>
                            <PublicRoute authed={this.state.authed} path='/' component={Landing} />
                        </Switch>
                </div>
            </Router>
        )
    }
}

export default Tareas;