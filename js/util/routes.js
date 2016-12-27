import React                         from 'react';
import { Provider }                  from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory          from 'history/lib/createBrowserHistory';
import configureStore                from '../store';

import  MainView    from '../components/MainView'
import  LessonMenu  from '../components/LessonMenu'

console.log("routes")

console.log(MainView)
console.log(LessonMenu)

export default (
	<Router>
		<Route path="/*" component={MainView}>
			<IndexRoute component={LessonMenu} />
		</Route>
	</Router>
);

console.log("done")