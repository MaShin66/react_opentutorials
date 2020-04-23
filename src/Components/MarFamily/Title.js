import React,  { Component } from 'react';

class Title extends Component {
    render(){
        return(
            <div className="">
                <h2><a href="/"
                onClick={function(e){
                    e.preventDefault();
                    this.props.handleTitle();
                }.bind(this)}>{this.props.main}</a></h2>
            </div>
        );
    }
}

export default Title;