import Immutable from 'immutable';

const init = {
	students: {},
	active_student: ""
}

const defaultState = Immutable.fromJS(init);

export default function StudentsReducer(state = defaultState, action) {
	var nstate = state.toJS()
	switch(action.type) {
		case 'ADD_STUDENT':
			var name = action.payload.name
			var student = {name}
			nstate.students[name] = student
			break
		case 'SET_ACTIVE_STUDENT':
			var name = action.payload.name
			nstate.active_student = name
			break
	}
	return Immutable.fromJS(nstate)
}
