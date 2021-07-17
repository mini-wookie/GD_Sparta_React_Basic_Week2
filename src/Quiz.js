import React from "react";
import styled from "styled-components";
import SwipeItem from "./SwipeItem";
import TinderCard from "react-tinder-card";

const Quiz = (props) => {
    console.log(props);

    const [num, setNum] = React.useState(0);

    const list = props.list;

    const onSwipe = (direction) => {
        console.log("You swiped: " + direction);
        setNum(num + 1);
    };

    if (num > 10) {
        return <div>퀴즈 끝!</div>;
    }

    return (
        <QuizContainer>
            <p>
                <span>{num + 1}번 문제</span>
            </p>
            {props.list.map((l, idx) => {
                if (num === idx) {
                    return <Question key={idx}>{l.question}</Question>;
                }
            })}

            <AnswerZone>
                <Answer>{"O "}</Answer>
                <Answer>{" X"}</Answer>
            </AnswerZone>

            {props.list.map((l, idx) => {
                if (idx === num) {
                    return (
                        <DragItem key={idx}>
                            <TinderCard
                                onSwipe={onSwipe}
                                onCardLeftScreen={onSwipe}
                                onCardRightScreen={onSwipe}
                                preventSwipe={["up", "down"]}
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/2346px-Android_logo_2019_%28stacked%29.svg.png" />
                            </TinderCard>
                        </DragItem>
                    );
                }
            })}
        </QuizContainer>
    );
};

const QuizContainer = styled.div`
  & > p > span {
    padding: 8px 16px;
    background-color: #fef5d4;
    border-radius: 30px;
  }
`

const Question = styled.h1`
  font-size: 1.5em;
`

const AnswerZone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  min-height: 70vh;
`

const Answer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10em;
  font-weight: 600;
  color: #dadafc77;
`

const DragItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;

  & > div {
    width: 300px;
    height: 100px;
    border-radius: 150px;
    background-color: #eee;
  }
  & img {
    max-width: 150px;
  }
`

export default Quiz;