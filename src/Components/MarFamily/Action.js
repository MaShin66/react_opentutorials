import React,  { Component } from 'react';

class Love extends Component {
    render(){
        return(
            <div className="">
                <ul>
                    <li><a href="/" onClick={function(e){
                        e.preventDefault();
                        this.props.handleClick('create');
                    }.bind(this)}>짝녀 만들기</a></li>

                    <li><a href="/" onClick={function(e){
                        e.preventDefault();
                        this.props.handleClick('update');
                    }.bind(this)}>짝녀 바꾸기</a></li>
                    
                    <li><button onClick={function(e){
                        e.preventDefault();
                        this.props.handleClick('delete');
                    }.bind(this)}>짝녀 잊기</button></li>
                </ul>
            </div>
        );
    }
}

export default Love;