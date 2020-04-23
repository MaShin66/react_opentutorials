import React,  { Component } from 'react';

class InformationUpdate extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            desc: this.props.desc
        }
    }

    render(){
        return(
            <div className="">
                <h3>Update</h3>
                <form method="post" onSubmit={function(e){
                        e.preventDefault();
                        this.props.handleSubmit(this.state.id, e.target.girl.value, e.target.desc.value);
                    }.bind(this)}>

                        <input type="hidden" value={this.state.id}></input>

                    <input 
                        type="text" 
                        name="girl" 
                        value={this.state.name}
                        onChange={function(e){
                            this.setState({
                                // e.target.girl.value 가 아닌 이유는 이미
                                // 이 input 자체가 girl을 뜻하는 거라 girl이 target 안에 없음
                                name: e.target.value
                            });
                        }.bind(this)}>
                    </input>
                    <br></br>
                    <textarea 
                        name="desc" 
                        value={this.state.desc}
                        onChange={function(e){
                            this.setState({
                                desc: e.target.value
                            });
                        }.bind(this)}>
                    </textarea>

                    <input type="submit" value="추가하기"></input>
                </form>
            </div>
        );
    }
}

export default InformationUpdate;