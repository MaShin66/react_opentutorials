import React, { Component } from 'react';

class Menu extends Component {
    render() {
        var menu = this.props.menu;
        var lists = [];
        for(var i in menu) {
            lists.push(<li key={menu[i].id}><a href="/" onClick={function(id, e) {
                e.preventDefault();
                this.props.clickTitle(id);
            }.bind(this, menu[i].id)}>{menu[i].name}</a></li>);
        }
        return(
            <div>
                <ul>
                    {lists}
                </ul>    
            </div>
        );
    }
}

export default Menu;