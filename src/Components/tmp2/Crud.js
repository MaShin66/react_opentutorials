import React, { Component } from 'react';

class Crud extends Component {
    render() {
        return (
            <div>
                <div><a href="/" onClick={function(e) {
                    e.preventDefault();
                    this.props.clickFtn('create');
                }.bind(this)}>추가</a></div>
                <br></br>
                <div><a href="/" onClick={function(e) {
                    e.preventDefault();
                    this.props.clickFtn('update');
                }.bind(this)}>변경</a></div>
                <br></br>
                <div><input type="button" value="삭제" onClick={function(e) {
                    window.confirm('삭제하시겠습니까?');
                    e.preventDefault();
                    this.props.clickFtn('delete');
                }.bind(this)}></input></div>
            </div>
        );
    }
}

export default Crud;