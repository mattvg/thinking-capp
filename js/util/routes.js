import React                         from 'react';
import { Provider }                  from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory          from 'history/lib/createBrowserHistory';
import configureStore                from '../store';

import  MainView    from '../components/MainView'
import  LessonMenu  from '../components/LessonMenu'

console.log("routes2")

console.log(Router)
console.log(Route)
console.log(IndexRoute)

export default (
	<Router>
		<Route path="/*" component={MainView}>
			<IndexRoute component={LessonMenu} />
		</Route>
	</Router>
);

console.log("done")