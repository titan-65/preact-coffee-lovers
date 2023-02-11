import { h } from 'preact';
import { Route, Router } from 'preact-router';

import Header from './header';
import Footer from "./footer";

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Feed from "../routes/feed";

const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<Route path="/" component={Home} />
				<Route path="/feed/" component={Feed} />
				<Route path="/profile/:user" component={Profile} />
			</Router>
		</main>
		<Footer />
	</div>
);

export default App;
