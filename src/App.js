import React, { Component } from 'react';

import Subject from './Components/opentutorials/Subject';
import TOC from './Components/opentutorials/TOC';
import ReadContent from './Components/opentutorials/ReadContent';
import CreateContent from './Components/opentutorials/CreateContent';
import UpdateContent from './Components/opentutorials/UpdateContent';
import Control from './Components/opentutorials/Control';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.max_content_id = 3;
    this.state = {
      mode : 'welcome',
      slected_content_id : null,
      subject : { title : 'WEB', sub: 'Wolrd Wide Web!' },
      welcome : { title : 'Welcome', desc: 'Hello, React!!' },
      contents : [
        { id : 1, title : 'HTML', desc : 'HTML is for information' },
        { id : 2, title : 'CSS', desc : 'CSS is for design'},
        { id : 3, title : 'JavaScript', desc : 'Javascript is for interactive'}
      ]
    }
  }

  getReadContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id === this.state.slected_content_id){
        return data;
        // break;
      }
      i = i + 1;
    }
  }

  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title = {_title} desc = {_desc}></ReadContent>
    } else if(this.state.mode === 'read'){
      var _content = this.getReadContent();
      _article = <ReadContent title = {_content.title} desc = {_content.desc}></ReadContent> 
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;
        // var _contents = this.state.contents.concat(
        //   {id: this.max_content_id, title: _title, desc: _desc}
        // );
        var _contents = Array.from(this.state.contents);
        _contents.push({id: this.max_content_id, title: _title, desc: _desc});
        this.setState({
          contents: _contents,
          mode: 'read',
          slected_content_id: this.max_content_id
        });
        console.log(_title, _desc);
      }.bind(this)}></CreateContent>
    } else if(this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc){
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while(i < _contents.length){
          if(_contents[i].id === _id) {
            _contents[i] = {id: _id, title: _title, desc: _desc};
            break;
          }
          i = i + 1;
        }
        // this.max_content_id = this.max_content_id + 1;
        // var _contents = this.state.contents.concat(
        //   {id: this.max_content_id, title: _title, desc: _desc}
        // );
        this.setState({
          contents: _contents,
          mode: 'read'
        });
        console.log(_title, _desc);
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render(){
    console.log('App render');
    
    return(
      <div className = "App">
        <Subject
          title = {this.state.subject.title}
          sub = {this.state.subject.sub}
          onChangePage = {function() {
            this.setState({
              mode: 'welcome',
              slected_content_id: null
            });
          }.bind(this)}
        >
        </Subject>

        <TOC 
          data = {this.state.contents}
          onChangePage = {function(id){
            this.setState({
              mode : 'read',
              slected_content_id: Number(id)
            });
          }.bind(this)}>
        </TOC>

        <Control
          onChangeMode={function(mode_){
            if(mode_ === 'delete'){
              if(window.confirm('정말 삭제하시겠습니까?')){
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while(i < _contents.length){
                  if(_contents[i].id === this.state.slected_content_id){
                    _contents.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  mode: 'welcome',
                  contents: _contents
                });
                alert('삭제되었습니다');
              }
            } else {
              this.setState({
                mode: mode_
              });
            }
            
          }.bind(this)}>

        </Control>

        {this.getContent()}

      </div>
    );
  }
}

export default App;