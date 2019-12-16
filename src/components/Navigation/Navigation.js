import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import logo from '../../Assets/logo.png';


class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/"><img src={logo} alt=""
                                                              style={{
                                                                  width: '50px',
                                                                  height: '50px'
                                                              }}/></NavLink>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/avengers">Avengers</NavLink>
                        <NavLink className="nav-item nav-link" to="/age-of-ultron">Age of Ultron</NavLink>
                        <NavLink className="nav-item nav-link" to="/infinity-war">Infinity War</NavLink>
                        <NavLink className="nav-item nav-link" to="/endgame">Endgame</NavLink>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navigation;