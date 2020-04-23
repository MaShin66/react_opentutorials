import React, { Component } from 'react';

class Content extends Component {
    render() {
        var contentData = this.props.contentData;
        var contentList = [];
        for(var i in contentData) {
            contentList.push(<li key={contentData[i].id}><a href="/"
                onClick={function(id, e) {
                    e.preventDefault();
                    this.props.clickFtn(id);
                }.bind(this, contentData[i].id)}>{contentData[i].name}</a></li>);
        }
        return (
            <div>
                {contentList}
            </div>
        );
    }
}

export default Content;