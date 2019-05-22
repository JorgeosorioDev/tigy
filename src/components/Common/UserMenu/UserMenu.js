import React, { Component } from 'react';
import './UserMenu.css';

class UserMenu extends Component {
    constructor() {
        super()
    
        this.state = {
          activeItem: 0,
          items: [{
                name: 'Tigy Line'
                },
                {name: 'Mi Perfil'},
                {name: 'Grupos'},
                {name: 'Opciones'},
                {name: 'Salir'}]
        }
      }
    
      handleItemClick(index) {
        this.setState({
          activeItem: index,
        })
      }
    render() {
        return (
            <div className="user-menu">
                <ul id="user-menu">
                    <li className="active"><a href="/"><i className="far fa-list-alt"></i>Tigy Line</a></li>
                    <li><a href="/my-profile"><i className="fas fa-user"></i>Mi Perfil</a></li>
                    <li><a href="jsx-a11y/anchor-is-valid"><i className="fas fa-user-friends"></i>Grupos</a></li>
                    <li><a href="/login"><i className="fas fa-sign-out-alt"></i>Salir</a></li>
                </ul>
            </div>
            /*<div className="user-menu">
                    <li><a href="jsx-a11y/anchor-is-valid"><i className="fas fa-cogs"></i>Opciones</a></li>
                <ul id="user-menu">
                    {this.state.items.map((item, index) =>
                        <li
                        key={index}
                        className={this.state.activeItem === index ? 'navigation--active' : ''}
                        onClick={this.handleItemClick.bind(this, index)}
                        >
                        {item.name}
                        </li>
                    )}
                </ul>
            </div>*/
        );
    }
}

export default UserMenu;