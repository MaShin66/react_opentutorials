import React, { Component } from 'react';

class TOC extends Component {

    shouldComponentUpdate(newProps, newState){
      console.log('===> TOC render shouldComponentUpdate'
      , newProps.data
      , this.props. data
    );
    if(this.props.data === newProps.data){
      return false;
    }
    return true;
  }
// 1. shouldComponent 는 render 이전에 실행 되고
// 2. shouldComponent 의 return 값이 true 여야 render 가 호출
// 3. 새롭게 바뀐 값(newProps.data)과 이전 데이터(this.props.data)에 접근할 수 있다.
// 그래서 App에서 push 대신 concat을 한 이유가
// push 하면 원본이 바껴서 newProps 와 this.props 값이 같이 변하고
// concat 하면 원본은 안바껴서 원본이랑 비교 가능하다.
// -> 아래 render() 가 항상 실행되는데 concat + 위의 코드로 변경될 때만 render()

  render(){
    var data = this.props.data;
    // console.log(data);
    var tmp = 3;
    var lists = [];
    var i = 0;
    while(i < data.length){
      lists.push(
        <li key = {data[i].id}>
          <a href={"/content/"+data[i].id}
            data-id = {data[i].id}
            onClick = {function (e){
              e.preventDefault();
              // debugger;
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >{data[i].title}</a>
        </li>
      );
      i = i + 1;
    }
    
    return(
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>

    );
  }
}

export default TOC;