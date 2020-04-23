import React, { Component } from 'react';

class Control extends Component {
    render() {
        return (
            <div>
                <div><a href="/create" onClick={function(e) {
                    e.preventDefault();
                    this.props.clickTitle('create');
                }.bind(this)}>create</a></div>
                <br></br>
                <div><a href="/update" onClick={function(e) {
                    e.preventDefault();
                    this.props.clickTitle('update');
                }.bind(this)}>update</a></div>
                <br></br>
                <div><button onClick={function(e) {
                    e.preventDefault();
                    this.props.clickTitle('delete');
                }.bind(this)}>delete</button></div>
                <br></br>
            </div>
        );
    }
}

export default Control;