import React, { Component } from 'react';

import Main from './Components/tmp2/Main';
import Content from './Components/tmp2/Content';
import Crud from './Components/tmp2/Crud';
import Board from './Components/tmp2/Board';

class App5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'create',
            choiceId: null,
            main: { title: '말패밀리', subtitle: '말패 챔피언을 소개합니다'},
            content: [
                {id: 1, name: '기준', champion: '제이스'},
                {id: 2, name: '절규', champion: '아무무'},
                {id: 3, name: '혁', champion: '미스포춘'}
            ]
        };
    }

    render() {
        var board = null;
        if(this.state.mode === 'title') {
            board = this.state.main.subtitle;
        } else if(this.state.mode === 'name') {
            board = this.state.content[this.state.choiceId].champion;
        } else if(this.state.mode === 'create') {
            board = 
            <Board mode={this.state.mode} clickFtn={function(name, champion) {
                var lastPlusId = this.state.content.length + 1;
                var createValue = { id: lastPlusId, name: name, champion: champion };
                var newContent = this.state.content.concat(createValue);
                this.setState({
                    content: newContent
                })
            }.bind(this)}></Board>;
        } else if(this.state.mode === 'update') {
            board = 
            <Board 
                mode={this.state.mode}
                id={this.state.content[this.state.choiceId].id} 
                name={this.state.content[this.state.choiceId].name}
                champion={this.state.content[this.state.choiceId].champion}
                clickFtn={function(id, name, champion) {
                    var updateContent = {id: id, name: name, champion: champion};
                    var tmpContent = this.state.content;
                    tmpContent[id-1] = updateContent;
                    this.setState({
                        content: tmpContent
                    })
                }.bind(this)}
                >
                </Board>
        }

        return (
            <div>
                <div>
                    <Main 
                        title={this.state.main.title} 
                        clickFtn={function() {
                            this.setState({
                                mode: 'title'
                            });
                        }.bind(this)}
                    >
                    </Main>
                </div>
                <br></br>
                <div>
                    <Content 
                        contentData={this.state.content}
                        clickFtn={function(id) {
                            this.setState({
                                mode: 'name',
                                choiceId: id-1
                            })
                        }.bind(this)}
                    >
                    </Content>
                </div>
                <br></br>
                <div>
                    <Crud
                        clickFtn={function(mode) {
                            if(mode === 'delete') {
                                var tmpContent = this.state.content;
                                console.log(tmpContent);
                                tmpContent.splice(this.state.choiceId, 1);
                                this.setState({
                                    content: tmpContent,
                                    mode: 'title'
                                })
                            } else {
                                this.setState({
                                    mode: mode
                                });
                            }
                        }.bind(this)}
                    >
                    </Crud>
                <br></br>
                    {board}
                </div>
            </div>
        );
    }
}

export default App5;