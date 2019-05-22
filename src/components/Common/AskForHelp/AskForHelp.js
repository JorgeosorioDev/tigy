import React, { Component } from 'react';
import './AskForHelp.css'

class AskForHelp extends Component {
    render() {
        return (
            <div className="body-component ask">
                <div className="askFor-help">
                    <div className="askFor-help-header">
                        <h4>Solicitar ayuda</h4>
                        <div id="close-askFor-help">
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className="askFor-help-body">
                        <div className="askFor-help-request">
                            <div className="user-post-img">
                                    
                            </div>
                            <textarea placeholder="¿Que necesitas?">
                            
                            </textarea>
                        </div>
                        <small><i className="fas fa-camera"></i>Adjuntar imágines</small>
                    </div>
                    <div className="askFor-help-footer">
                        <button className="friends"><p>Amigos</p><i className="fas fa-caret-down"></i></button>
                        <button className="reward"><p>Recompensa</p><i className="fas fa-award"></i></button>
                        <button className="send-request"><p>Enviar solicitud</p></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AskForHelp;