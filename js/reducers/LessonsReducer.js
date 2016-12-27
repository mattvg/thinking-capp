import Immutable from 'immutable';

const init = {
	lessons: []
}

const defaultState = Immutable.fromJS(init);

export default function LessonsReducer(state = defaultState, action) {
	var nstate = state.toJS()
	switch(action.type) {
		case 'DO_INIT':
			console.log("Initializing")
			break
	}
	return Immutable.fromJS(nstate)
}
