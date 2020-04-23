import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            champion: this.props.champion
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={function(e) {
                    e.preventDefault();
                    this.props.handleSubmit(
                        this.state.id,
                        this.state.name,
                        this.state.champion
                    );
                }.bind(this)}>
                    이름<input type="text" name="name" value={this.state.name}
                        onChange={function(e) {
                            this.setState({
                                name: e.target.value
                            })
                        }.bind(this)}></input>
                    <br></br>
                    <br></br>
                    내용<textarea name="champion" value={this.state.champion}
                        onChange={function(e) {
                            this.setState({
                                champion: e.target.value
                            })
                        }.bind(this)}></textarea>
                    <br></br>
                    <input type="hidden" valuie={this.state.id}></input>
                    <input type="submit" value="수정"></input>
                </form>
            </div>
        );
    }
}

export default UpdateContent;