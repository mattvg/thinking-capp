import React                         from 'react';
import { Provider }                  from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory          from 'history/lib/createBrowserHistory';
import configureStore                from '../store';

import  MainView      from '../components/MainView'
import  Home          from '../components/Home'
import  LessonMenu    from '../components/LessonMenu'
import  SelectStudent from '../components/SelectStudent'

export default (
	<Router>
		<Route path="/" component={MainView}>
			<IndexRoute component={Home} />
		</Route>
		<Route path="/index.htm" component={MainView}>
			<IndexRoute component={Home} />
		</Route>
		<Route path="/students" component={MainView}>
			<IndexRoute component={SelectStudent} />
		</Route>
	</Router>
)
