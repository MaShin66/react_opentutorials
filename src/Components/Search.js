import React, { Component } from 'react';

class Search extends Component{

    constructor(props){
        super(props);
        this.state = {
            keyword: ''
        }
    }
    handleChange(e){
        this.setState({
            keyword: e.target.value
        });
      }

    render(){
        var list = [];
        var data = this.props.group;
        data = data.sort();

        for (var i in data){
            if(data[i].name.toLowerCase().indexOf(this.state.keyword) > -1
            || data[i].name.toUpperCase().indexOf(this.state.keyword) > -1){
                list.push(data[i].name);
            }
        }

        return(
            <div>
                <input
                  name="keyword"
                    placeholder="검색"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.keyword} >
                </input>
                <p>{list}</p>
            </div>
        );
    }
}

export default Search;