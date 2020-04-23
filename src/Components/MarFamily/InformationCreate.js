import React,  { Component } from 'react';

class InformationCreate extends Component {
    render(){
        return(
            <div className="">
                <h3>Create</h3>
                <form method="post" onSubmit={function(e){
                        e.preventDefault();
                        this.props.handleSubmit(e.target.girl.value, e.target.desc.value);
                    }.bind(this)}>

                    <input type="text" name="girl"></input>
                    <br></br>
                    <textarea name="desc"></textarea>

                    <input type="submit" value="추가하기">
                        {/* onClick={this.props.handleClick()} */}
                    </input>
                </form>
            </div>
        );
    }
}

export default InformationCreate;