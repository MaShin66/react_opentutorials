import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return(
            <div>
                <h1><a href="/" onClick={function(e) {
                    e.preventDefault();
                    this.props.clickTitle();
                }.bind(this)}>{this.props.title}</a></h1>
            </div>
        );
    }
}

export default Subject;