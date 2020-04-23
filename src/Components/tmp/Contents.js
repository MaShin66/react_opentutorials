import React, { Component } from 'react';

class Contents extends Component {
    render() {
        return(
            <div>
                {this.props.contents}
            </div>
        );
    }
}

export default Contents;