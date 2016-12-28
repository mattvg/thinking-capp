import Immutable from 'immutable';

const init = {
	question_num: 0,
	correct: 0,
	attempts: 0
}

const defaultState = Immutable.fromJS(init);

export default function ActivityReducer(state = defaultState, action) {
	var nstate = state.toJS()
	switch(action.type) {
		case 'RESET_QUIZ':
			nstate.question_num = 0
			nstate.correct = 0
			nstate.attempts = 0
			break
		case 'ANSWER_QUESTION':
			console.log(action.payload)
			var inc = action.payload.correct
			nstate.question_num += 1
			//nstate.correct += inc
			//nstate.attempts += 1
			break
	}
	return Immutable.fromJS(nstate)
}
