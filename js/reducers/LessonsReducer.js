import axios from "axios"
import Immutable from 'immutable';

const init = {
	lessons: {},
	loaded: undefined,
	loaded_name: ""
}

const defaultState = Immutable.fromJS(init);

export default function LessonsReducer(state = defaultState, action) {
	var nstate = state.toJS()
	switch(action.type) {
		case 'DO_INIT':
			break
		case 'ADD_LESSON':
			var lesson = action.payload
			var name = lesson.name
			var src = lesson.src
			nstate.lessons[name] = lesson
			break
		case 'LOAD_LESSON_ERROR':
			var err = action.payload
			nstate.loaded = {name: "error", "error": err}
			nstate.loaded_name = ""
			break
		case 'LOAD_LESSON_SUCCESS':
			console.log(action.payload)
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
			console.log(lesson)
			console.log(nstate.loaded_name)
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
