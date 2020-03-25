import React from "react"
import { NavLink } from "react-router-dom"

const MainMenu = () => (
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
            <a href="/">
                <img className="main-logo" src="https://http2.mlstatic.com/banderas-del-peru-material-rasso-D_NQ_NP_799946-MPE31030641289_062019-F.jpg" alt="Logo bandera peru"/>
            </a>
        </div>
        <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
          <nav className="main-menu" id="main-menu">
            <ul>
                <li><NavLink exact to="/" activeClassName="activo"> Explorar </NavLink></li>
                <li><NavLink to="/Prevenir" activeClassName="activo"> Prevenir </NavLink></li>
                <li><NavLink to="/Reportar" activeClassName="activo"> Reportar </NavLink></li>
                <li><NavLink to="/usuarios" activeClassName="activo"> Usuarios </NavLink></li>
            </ul>
          </nav>
          <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
      </div>
    </header>
)

export default MainMenu