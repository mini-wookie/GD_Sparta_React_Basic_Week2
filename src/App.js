import logo from './logo.svg';
import './App.css';
import React from "react";

import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";

class App extends React.Component{
  constructor(props){
    super(props);
// state에 필요한 데이터를 넣어줘요!
    this.state = {
      name: "김민욱-Wookie",
      page: "score",
      scoreMsg: "을(를) 아주 잘 알고 있군요!",
      list: [
        { question: "대학교를 졸업했다.", answer: "X" },
        { question: "갤럭시보다 아이폰을 좋아한다.", answer: "X" },
        { question: "윈도우보다 맥북을 좋아한다.", answer: "O" },
        { question: "개발이 처음이다.", answer: "X" },
        { question: "열심히 하고 있다.", answer: "O" },
      ],
    };
  }

  render () {
    return (
      <div className="App">
        {this.state.page === "quiz" && (<Quiz list={this.state.list} />)}
        {this.state.page === "start" && (<Start name={this.state.name} />)}
        {this.state.page === "score" && (<Score name={this.state.name} scoreMsg={this.state.scoreMsg}/>)}
      </div>
    );
  }
}

export default App;