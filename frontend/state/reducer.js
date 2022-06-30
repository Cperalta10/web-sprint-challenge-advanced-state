import * as actionType from "./action-types";
// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case actionType.MOVE_COUNTERCLOCKWISE:
      if (state === 0) {
        return state + 5;
      } else {
        return state - 1;
      }
    case actionType.MOVE_CLOCKWISE:
      if (state === 5) {
        return state - 5;
      } else {
        return state + 1;
      }
    default:
      return state;
  }
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case actionType.SET_QUIZ_INTO_STATE:
      return action.payload;
    default:
      return state;
  }
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case actionType.SET_SELECTED_ANSWER:
      if (action.payload === 0) {
        return null;
      } else if (action.payload === 1) {
        return 1;
      } else {
        return 2;
      }
    default:
      return state;
  }
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case actionType.SET_INFO_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  switch (action.type) {
    case actionType.INPUT_CHANGE:
      if (action.payload.id === "newQuestion") {
        return { ...state, newQuestion: action.payload.value };
      } else if (action.payload.id === "newTrueAnswer") {
        return { ...state, newTrueAnswer: action.payload.value };
      } else if (action.payload.id === "newFalseAnswer") {
        return { ...state, newFalseAnswer: action.payload.value };
      } else {
        return state;
      }
    case actionType.RESET_FORM:
      return initialFormState;
    default:
      return state;
  }
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
