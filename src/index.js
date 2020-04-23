import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 생활코딩 연습
// import App from './App';

// 말패 버전 연습
// import App from './App2';

// 벨로퍼트
// import App from './App3';

// 나중 연습
// import App from './App4';

// 연습2
import App from './App5';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
