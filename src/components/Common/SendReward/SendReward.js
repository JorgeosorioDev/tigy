import React, { Component } from 'react';
import './SendReward.css'

class SendReward extends Component {
    render() {
        return (
            <div className="body-component sed_reward">
                <div className="send-reward">
                    <div className="send-reward-header">
                        <h4>Enviar reconocimiento</h4>
                        <div id="close-send-reward">
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className="send-reward-body">
                        <div className="search-bar">
                            <i className="fa fa-search"></i><input type="text" placeholder="Buscar amigos" />
                        </div>
                        <div className="select-area">
                            <div className="left">
                                <ul>
                                    <li>
                                        <input type="checkbox" className="suport-me" id="suport-me"/>
                                        <label className="suport-me" htmlFor="suport-me">
                                            <i className="far fa-square"></i>
                                            <i className="far fa-check-square"></i>
                                            Apoyarme
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="love-me" id="love-me"/>
                                        <label className="love-me" htmlFor="love-me">
                                            <i className="far fa-square"></i>
                                            <i className="far fa-check-square"></i>
                                            Amar
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="help-me" id="help-me"/>
                                        <label className="help-me" htmlFor="help-me">
                                            <i className="far fa-square"></i>
                                            <i className="far fa-check-square"></i>
                                            Ayudarme
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>
                                        <input type="checkbox" className="share-me" id="share-me"/>
                                        <label className="share-me" htmlFor="share-me">
                                            <i className="far fa-square"></i>
                                            <i className="far fa-check-square"></i>
                                            Compartir
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="exist" id="exist"/>
                                        <label className="exist" htmlFor="exist">
                                            <i className="far fa-square"></i>
                                            <i className="far fa-check-square"></i>
                                            Existir
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="guide-me" id="guide-me"/>
                                        <label className="guide-me" htmlFor="guide-me">
                                            <i className="far fa-square"></i>
                                            <i className="far fa-check-square"></i>
                                            Guiarme
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h4>Selecciona hasta 2 valores</h4>
                        <div className="select-area">
                            <div className="left">
                                <ul>
                                    <li>
                                        <input type="checkbox" className="kindness" id="kindness"/>
                                        <label className="kindness" htmlFor="kindness">
                                            <i className="far fa-square"></i>
                                            <i className="far fa-check-square"></i>
                                            Tu amabilidad
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="commitment" id="commitment"/>
                                        <label className="commitment" htmlFor="commitment">
                                            <i className="far fa-square"></i>
                                            <i className="far fa-check-square"></i>
                                            Tu compromiso
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="honesty" id="honesty"/>
                                        <label className="honesty" htmlFor="honesty">
                                            <i className="far fa-square"></i>
                                            <i className="far fa-check-square"></i>
                                            Tu honestidad
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>
                                        <input type="checkbox" className="goodness" id="goodness"/>
                                        <label className="goodness" htmlFor="goodness">
                                            <i className="far fa-square"></i>
                                            <i className="far fa-check-square"></i>
                                            Tu bondad
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="discipline" id="discipline"/>
                                        <label className="discipline" htmlFor="discipline">
                                            <i className="far fa-square"></i>
                                            <i className="far fa-check-square"></i>
                                            Tu disciplina
                                        </label>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="integrity" id="integrity"/>
                                        <label className="integrity" htmlFor="integrity">
                                            <i className="far fa-square"></i>
                                            <i className="far fa-check-square"></i>
                                            Tu integridad
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="send-reward-footer">
                        <button className="friends"><p>Mis amigos</p><i className="fas fa-caret-down"></i></button>
                        <button className="reward"><p>Recompensa</p><i className="fas fa-award"></i></button>
                        <button className="send-request"><p>Enviar</p></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SendReward;