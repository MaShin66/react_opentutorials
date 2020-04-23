import React, { Component } from 'react';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            champion: this.props.champion
        }
    }

    render() {
        var boardContent = null;
        if(this.props.mode === 'create') {
            boardContent = 
            <form onSubmit={function(e) {
                e.preventDefault();
                this.props.clickFtn(e.target.name.value, e.target.champion.value);
            }.bind(this)}>
                이름<input type="text" name="name"></input>
                <br></br>
                <textarea name="champion"></textarea> 챔피언 이름
                <br></br>
                <input type="submit" value="추가"></input>
            </form>
        } else if(this.props.mode === 'update') {
            boardContent = 
            <form onSubmit={function(e) {
                e.preventDefault();
                this.props.clickFtn(e.target.id.value, e.target.name.value, e.target.champion.value);
            }.bind(this)}>
                이름<input type="text" name="name" value={this.state.name} onChange={function(e) {
                    this.setState({
                        name: e.target.value
                    })
                }.bind(this)}></input>
                <br></br>
                <textarea name="champion" value={this.state.champion} onChange={function(e) {
                    this.setState({
                        champion: e.target.value
                    })
                }.bind(this)}></textarea> 챔피언 이름
                <br></br>
                <input type="hidden" name="id" value={this.state.id}></input>
                <input type="submit" value="수정"></input>
            </form>
        }
        
        return (
            <div>
                {boardContent}
            </div>
        );
    }
}

export default Board;