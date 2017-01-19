import axios from "axios"
import Immutable from 'immutable';

const init = {
	question_num: 0,
	study_num: 0,
	correct: 0,
	attempts: 0,
	complete: 0,
	loaded: undefined,
	loaded_name: ""
}

const defaultState = Immutable.fromJS(init);

export default function ActivityReducer(state = defaultState, action) {
	var nstate = state.toJS()
	switch(action.type) {
		case 'SET_QUIZ':
			var quiz = action.payload.quiz
			nstate.quiz = quiz
		case 'RESET_QUIZ':
			nstate.question_num = 0
			nstate.correct = 0
			nstate.attempts = 0
			nstate.complete = 0
			break
		case 'ANSWER_QUESTION':
			var answer = action.payload.answer
			var element = answer.element
			var correct = answer.correct
			nstate.question_num += 1
			var inc = 0
			if (correct == "1") {
				inc = 1
			}
			nstate.correct += inc
			nstate.attempts += 1
			var qlen = 0
			if (nstate.loaded != undefined) {
				qlen = nstate.loaded.length
			}
			if (nstate.attempts >= qlen) {
				nstate.complete = 1
			}
			break
		case 'LOAD_LESSON_ERROR':
			var err = action.payload
			nstate.loaded = {name: "error", "error": err}
			nstate.loaded_name = ""
			break
		case 'LOAD_LESSON_SUCCESS':
			var lesson = action.payload.lesson
			nstate.loaded = lesson
			var name = action.payload.name
			console.log(name)
			if (name != undefined) {
				nstate.loaded_name = name				
			}
			break
		case 'LOAD_LESSON':
			var lesson = action.payload.lesson
			var name = lesson.name
			var src = lesson.src
			var load = true
			if (nstate.loaded != undefined) {
				if (nstate.loaded_name.name == lesson.name) {
					load = false
				}
			}
			var dispatch = action.payload.dispatch
			if (load) {
				axios
				  .get(src)
				  .then(function(result) {
				  	var lesson = result["data"]
					dispatch({type: "LOAD_LESSON_SUCCESS", payload: {lesson, name}})
				})
				.catch((err) => {
					console.log(err)
					dispatch({type: "LOAD_LESSON_ERROR", payload: err})
				})
			}
			break
	}
	return Immutable.fromJS(nstate)
}
