import React, { Component } from 'react';

class CreateContents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    // handleChange(e) {
    //     this.setState({
    //         value: e.target.value
    //     });
    // }

    render() {
        return (
            <div>
                <form onSubmit={function(e) {
                    e.preventDefault();
                    this.props.handleSubmit(e.target.name.value, e.target.champion.value);
                }.bind(this)}>
                    이름 - <input type="text" name="name"></input>
                    <br></br>
                    <br></br>
                    챔피언 - <textarea name="champion"></textarea>
                    <br></br>
                    <input type="submit" value="추가하기"></input>
                </form>
            </div>
        );
    }
}

export default CreateContents;