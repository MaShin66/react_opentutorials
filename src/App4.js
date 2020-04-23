import React, { Component } from 'react';
import Subject from './Components/tmp/Subject';
import Menu from './Components/tmp/Menu';
import Contents from './Components/tmp/Contents';
import Control from './Components/tmp/Control';
import CreateContents from './Components/tmp/CreateContents';
import UpdateContent from './Components/tmp/UpdateContent';

class App4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'update',
            choiceId: 1,
            subject: {title: '말패밀리', desc: '말패 3명을 소개합니다'},
            menu: [
                {id: 1, name: '기준', champion: '제이스'},
                {id: 2, name: '절규', champion: '아무무'},
                {id: 3, name: '혁', champion: '미스포춘'}
            ]
        }
    }

    render() {
        var contents = null;
        if(this.state.mode === 'main') {
            contents = <Contents contents={this.state.subject.desc}></Contents>
        } else if(this.state.mode === 'menu') {
            for(var i in this.state.menu) {
                if(this.state.menu[i].id === this.state.choiceId) {
                    contents = <Contents contents={this.state.menu[i].champion}></Contents>
                    break;
                }
            }
        } else if(this.state.mode === 'create') {
            contents = <CreateContents handleSubmit = {function(name, champion) {
                var i = this.state.menu.length;
                var data = {id: i+1, name: name, champion: champion};
                console.log(data);
                this.setState({
                    menu: this.state.menu.concat(data)
                })
            }.bind(this)}></CreateContents>;
        } else if(this.state.mode === 'update') {
            contents = <UpdateContent 
                id={this.state.menu[this.state.choiceId-1].id}
                name={this.state.menu[this.state.choiceId-1].name} 
                champion={this.state.menu[this.state.choiceId-1].champion}
                handleSubmit={function(id, name, champion) {
                    var menuTmp = this.state.menu;
                    menuTmp[this.state.choiceId-1] = {id: id, name: name, champion: champion};
                    this.setState({
                        menu: menuTmp,
                        mode: 'main'
                    })
                }.bind(this)}
                >
                </UpdateContent>;
        // 이걸 하면 오류나는 이유는 위에처럼 <></>로 안에 그려지는 곳에서 setState 작업을 하는 게 아니여서?
        // 다시 말하면 위에는 render 를 통해 state 값이 변하고 <>가 return 에 그려지는데
        // <>없이 render 에서 state 값만 변화시키면 원래 안되는 것이라
        // } else if(this.state.mode === 'delete') {
        //     var menuTmp = this.state.menu;
        //     menuTmp.splice([this.state.choiceId-1], 1);
        //     console.log(menuTmp);
        //     this.setState({
        //         menu: menuTmp,
        //         mode: 'main'
        //     })
        //     alert('삭제되었습니다');
        }

        return (
            <div>
                <Subject 
                    title = {this.state.subject.title}
                    clickTitle = {function() {
                        this.setState({
                            mode: 'main'
                        })
                    }.bind(this)}
                >
                </Subject>

                <Menu 
                    menu = {this.state.menu}
                    clickTitle = {function(id) {
                        this.setState({
                            mode: 'menu',
                            choiceId: id
                        })
                    }.bind(this)}
                >
                </Menu>

                <Control 
                    clickTitle = {function(crud) {
                        if(crud === 'delete') {
                            var menuTmp = this.state.menu;
                            menuTmp.splice([this.state.choiceId-1], 1);
                            console.log(menuTmp);
                            this.setState({
                                menu: menuTmp,
                                mode: 'main'
                            })
                            alert('삭제되었습니다');
                        } else {
                            this.setState({
                                mode: crud
                            })
                        }
                    }.bind(this)}
                >
                </Control>

                {contents}
            </div>
        );
    }
}

export default App4;