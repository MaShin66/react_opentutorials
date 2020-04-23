import React,  { Component } from 'react';

class Member extends Component {
    
    shouldComponentUpdate(newProps, newState){
        if(this.props.member === newProps.member){
            return false;
        }
        return true;
    }

    render(){
        var list = [];
        var member = this.props.member
        
        for(var i in member){
            list.push(<li key={member[i].id}><a href="/"
            onClick={function(id, e){
                e.preventDefault();
                this.props.handleMember(id);
            }.bind(this, member[i].id)}>{member[i].name}</a></li>)
        }

        return(
            <div className="">
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default Member;