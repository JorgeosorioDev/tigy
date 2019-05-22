import React, { Component } from 'react';
import './ProvideHelp.css'

class ProvideHelp extends Component {
    render() {
        return(
            <div className="body-component help">
                <div className="provide-help">
                    <div className="provide-help-header">
                        <h4>Brindar ayuda</h4>
                        <div id="close-provide-help">
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className="provide-help-body">
                        <p>Confirma tu ayuda y podrás ser gratamente recompenzado con una recompenza de <span>10</span> Tigy's</p>
                        <h4>10<i className="fas fa-award"></i></h4>
                    </div>
                    <div className="provide-help-footer">
                        <button className="cancel"><p>Cancelar</p></button>
                        <button className="confirm"><p>Confirmar ayuda</p></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProvideHelp;