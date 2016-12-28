import axios from "axios"
import Immutable from 'immutable';

const init = {
	lessons: {},
	loaded: undefined
}

const defaultState = Immutable.fromJS(init);

export default function LessonsReducer(state = defaultState, action) {
	var nstate = state.toJS()
	switch(action.type) {
		case 'DO_INIT':
			console.log("Initializing")
			break
		case 'ADD_LESSON':
			var lesson = action.payload
			var name = lesson.name
			var src = lesson.src
			nstate.lessons[name] = lesson
			console.log(lesson)
			break
		case 'LOAD_LESSON':
			var lesson = action.payload.lesson
			var src = lesson.src
			var load = true
			if (nstate.loaded != undefined) {
				if (nstate.loaded.name == lesson.name) {
					load = false
				}
			}
			if (load) {
				axios
				  .get(src)
				  .then(function(result) {
				  	var raw = result["data"]
				  	console.log(raw)
				})
				.catch((err) => {
					store.dispatch({type: "LOAD_LESSION_ERROR", playload: err})
				})				
			}
			break
	}
	return Immutable.fromJS(nstate)
}
