import axios from "axios"
import Immutable from 'immutable';

const init = {
	lessons: {}
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
	}
	return Immutable.fromJS(nstate)
}
