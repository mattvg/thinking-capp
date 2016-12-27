import Immutable from 'immutable';

const init = {
	students: [],

}

const defaultState = Immutable.fromJS(init);

export default function StudentsReducer(state = defaultState, action) {
	var nstate = state.toJS()
	switch(action.type) {
		case 'ADD_STUDENT':
			var name = action.payload.name
			var student = {name}
			nstate.students.push(student)
			console.log(nstate.students)
			break
	}
	return Immutable.fromJS(nstate)
}
