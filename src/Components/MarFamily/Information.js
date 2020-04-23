import React,  { Component } from 'react';

class Information extends Component {
    render(){
        return(
            <div className="">
                <h3>{this.props.information}</h3>
            </div>
        );
    }
}

export default Information;