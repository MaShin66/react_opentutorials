import React, { Component } from 'react';
import './App2.css';

import Title from './Components/MarFamily/Title.js';
import Member from './Components/MarFamily/Member.js';
import Action from './Components/MarFamily/Action.js';
import Information from './Components/MarFamily/Information.js';
import InformationCreate from './Components/MarFamily/InformationCreate.js';
import InformationUpdate from './Components/MarFamily/InformationUpdate.js';


class App2 extends Component {

  constructor(props){
    super(props);
    this.state = {
      mode: 'default',
      ChoiceNumber: null,
      title: {main: '규녀들', sub: '절규의 여자들 소개'},
      member: [
        {id: 0, name: '판가', desc: '판가, 2판사판'},
        {id: 1, name: '최가', desc: '최가, 그랬었나'},
        {id: 2, name: '심수', desc: '심수, 외모지상주의'},
        {id: 3, name: '뫼솔', desc: '뫼솔, 가장 가까웠던'},
        {id: 4, name: '홍녀', desc: '홍녀, 손 끝의 추억'},
        {id: 5, name: '지수', desc: '지수, 과제셔틀'}
      ],
    }
  }

  MatchId(){
    for(var i in this.state.member){
      if(this.state.ChoiceNumber === this.state.member[i].id){
        return i;
      }
    } 
  }

  render(){
    var information_ = null;
    if(this.state.mode === 'default'){
      information_ = <Information information={this.state.title.sub}></Information>
    } else if(this.state.mode === 'choice'){
      var id_ = this.MatchId();
      information_ = <Information information={this.state.member[id_].desc}></Information>
    } else if(this.state.mode === 'create'){
      information_ = 
      <InformationCreate
        handleSubmit={function(girl_, desc_){
          var LastNumber = this.state.member.length-1;
          var GirlList = Array.from(this.state.member);
          GirlList.push({id: LastNumber+1, name: girl_, desc: desc_})
          this.setState({
            member: GirlList
          });
        }.bind(this)}>
      </InformationCreate> 
    } else if(this.state.mode === 'update'){
      information_ = 
      <InformationUpdate
        id={this.state.ChoiceNumber}
        name={this.state.member[this.state.ChoiceNumber].name}
        desc={this.state.member[this.state.ChoiceNumber].desc}
        handleSubmit={function(id_, girl_, desc_){
          var GirlList = Array.from(this.state.member);
          GirlList[id_].name = girl_;
          GirlList[id_].desc = desc_;
          this.setState({
            member: GirlList,
            mode: 'choice'
          });
        }.bind(this)}
        >
      </InformationUpdate> 
    } else if(this.state.mode === 'delete'){
      window.confirm('정말 삭제하시겠습니까?');
      var GirlList = Array.from(this.state.member);
      GirlList.splice(this.state.ChoiceNumber, 1)
      console.log(GirlList);
      this.setState({
        member: GirlList,
        mode: 'default'
      });
    }

    return(
      <div className="App2">
        <Title 
          main={this.state.title.main}
          handleTitle={function(){
            this.setState({
              mode: 'default'
            });
          }.bind(this)}>
        </Title>

        <Member 
          member={this.state.member}
          handleMember={function(id){
            this.setState({
              mode: 'choice',
              ChoiceNumber: id
            });
          }.bind(this)}
          >
        </Member>

        <Action
          handleClick={function(mode_){
            this.setState({
              mode: mode_
            });
          }.bind(this)}>  
        </Action>

        {information_}

      </div>
    );
  }
}
export default App2;