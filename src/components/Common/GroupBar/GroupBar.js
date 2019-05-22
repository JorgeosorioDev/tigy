import React, { Component } from 'react';
import './GroupBar.css';

class GroupBar extends Component {
    render() {
        return (
            <div className="group-bar">

                <h3>Grupos Visibles</h3>
                <ul>
                    <li>
                        <input type="checkbox" className="public" id="public"/>
                        <label className="public" htmlFor="public">
                            <i className="far fa-square"></i>
                            <i className="far fa-check-square"></i>
                            Público
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" className="office" id="office"/>
                        <label className="office" htmlFor="office">
                            <i className="far fa-square"></i>
                            <i className="far fa-check-square"></i>
                            Oficina
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" className="family" id="family"/>
                        <label className="family" htmlFor="family">
                            <i className="far fa-square"></i>
                            <i className="far fa-check-square"></i>
                            Familia
                        </label>
                    </li>
                </ul>

            </div>
        );
    }
}

export default GroupBar;