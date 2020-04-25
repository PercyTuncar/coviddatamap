import React from 'react';
import "./styles/styles.scss"
import "./styles/styles.css"
import "./styles/homestyle.css"
import Explorar from './components/Pages/Explorar';
import Prevenir from "./components/Pages/Prevenir"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainMenu from './components/MainMenu'
import Tendencia from './components/Pages/Tendencia'
import Home from './components/Pages/Home';
import DonarPage from './components/Pages/DonarPage'

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/Explorar" component={ Explorar } />  
      <Route path="/Prevenir" component={ Prevenir } />  
      <Route path="/Tendencia" component={ Tendencia } /> 
      <Route path="/donar" component={DonarPage}/>
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada</span>  
        </div>
      )} />  
    </Switch> 
  </Router>
)

export default App;