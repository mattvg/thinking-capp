import axios from "axios"
import Immutable from 'immutable'

const init = {
	elements: {},
	queue: [],

}

const defaultState = Immutable.fromJS(init);

export default function ElementReducer(state = defaultState, action) {
	var nstate = state.toJS()
	switch(action.type) {
		case 'ADD_ELEMENT':
			var name = action.payload.name
			console.log(action.payload.element)
			var element = action.payload.element
			console.log(element)
			var dispatch = action.payload.dispatch
			nstate.elements[name] = element
			nstate.queue.push(name)
			while (nstate.queue.length > 100) {
				// TODO: revisit this, could be optimized for sure
				var gc = nstate.queue.shift()
				delete nstate.elements[gc]
			}
			break
		case 'LOAD_ELEMENT':
			var name = action.payload.name
			if (name != undefined) {
				var dispatch = action.payload.dispatch
				var element = nstate.elements[name]
				var src = "https://raw.githubusercontent.com/kylepolich/thinking-capp/dev/database/elements/" + name + ".element"
				if (element == undefined) {
					axios
					  .get(src)
					  .then(function(result) {
					  	console.log(result)
					  	var element = result["data"]
					  	console.log(element)
					  	var pl = {element, name, dispatch}
						dispatch({type: "ADD_ELEMENT", payload: pl})
					})
					.catch((err) => {
						console.log(err)
					})
				}
			}
			break
	}
	return Immutable.fromJS(nstate)
}
