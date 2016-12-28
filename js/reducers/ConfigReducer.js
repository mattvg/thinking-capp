import Immutable from 'immutable';

const init = {
	language: "en"
}

const defaultState = Immutable.fromJS(init);

export default function ConfigReducer(state = defaultState, action) {
	var nstate = state.toJS()
	switch(action.type) {
	}
	return Immutable.fromJS(nstate)
}
