import React, { useEffect } from "react";
import * as actionCreators from "../state/action-creators";
import { connect } from "react-redux";

export function Quiz(props) {
  useEffect(() => {
    props.fetchQuiz();
  }, []);

  const onClick = (e) => {
    props.selectAnswer(Number(e.target.id));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = () => {
      if (props.selectedAnswer === null) {
        return;
      } else if (props.selectedAnswer === 1) {
        return {
          quiz_id: props.quiz.quiz_id,
          answer_id: props.quiz.answers[0].answer_id,
        };
      } else {
        return {
          quiz_id: props.quiz.quiz_id,
          answer_id: props.quiz.answers[1].answer_id,
        };
      }
    };

    props.postAnswer(payload());
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div
                onClick={onClick}
                id={1}
                className={`answer${
                  props.selectedAnswer === 1 ? " selected" : ""
                }`}
              >
                {props.quiz.answers[0].text}
                <button onClick={onClick} id={1}>
                  {props.selectedAnswer === 1 ? "SELECTED" : "Select"}
                </button>
              </div>

              <div
                onClick={onClick}
                id={2}
                className={`answer${
                  props.selectedAnswer === 2 ? " selected" : ""
                }`}
              >
                {props.quiz.answers[1].text}
                <button onClick={onClick} id={2}>
                  {props.selectedAnswer === 2 ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button
              onClick={onSubmit}
              id="submitAnswerBtn"
              disabled={!props.selectedAnswer}
            >
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}

export default connect((st) => st, actionCreators)(Quiz);
