import React                         from 'react';
import { Provider }                  from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory          from 'history/lib/createBrowserHistory';
import configureStore                from '../store';

import  MainView      from '../components/MainView'
import  Home          from '../components/Home'
import  LessonMenu    from '../components/LessonMenu'
import  LessonSelectMenu    from '../components/LessonSelectMenu'
import  Quiz          from '../components/Quiz'
import  SelectStudent from '../components/SelectStudent'
import  Sorting       from '../components/Sorting'
import  Study         from '../components/Study'

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
		<Route path="/lessons" component={MainView}>
			<IndexRoute component={LessonSelectMenu} />
		</Route>
		<Route path="/quiz" component={MainView}>
			<IndexRoute component={Quiz} />
		</Route>
		<Route path="/sorting" component={MainView}>
			<IndexRoute component={Sorting} />
		</Route>
		<Route path="/study" component={MainView}>
			<IndexRoute component={Study} />
		</Route>
		<Route path="/lessons/*" component={MainView}>
			<IndexRoute component={LessonMenu} />
		</Route>
	</Router>
)
