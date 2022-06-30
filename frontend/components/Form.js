import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

export function Form(props) {
  const onChange = (evt) => {
    props.inputChange(evt.target.value, evt.target.id);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const payload = {
      question_text: props.form.newQuestion,
      true_answer_text: props.form.newTrueAnswer,
      false_answer_text: props.form.newFalseAnswer,
    };

    props.postQuiz(payload);
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        value={props.form.newQuestion}
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        value={props.form.newTrueAnswer}
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        value={props.form.newFalseAnswer}
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button
        disabled={
          props.form.newTrueAnswer.trim().length > 1 &&
          props.form.newQuestion.trim().length > 1 &&
          props.form.newFalseAnswer.trim().length > 1
            ? false
            : true
        }
        id="submitNewQuizBtn"
      >
        Submit new quiz
      </button>
    </form>
  );
}

export default connect((st) => st, actionCreators)(Form);
