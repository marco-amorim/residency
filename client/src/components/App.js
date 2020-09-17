import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { Route } from 'react-router-dom';
import ResidenceList from './residences/ResidenceList';
import ResidenceCreate from './residences/ResidenceCreate';
import ResidenceEdit from './residences/ResidenceEdit';
import ResidenceDelete from './residences/ResidenceDelete';
import ResidenceShow from './residences/ResidenceShow';

import '../assets/styles/global.css';

const App = () => {
	return (
		<div className="ui container">
			<BrowserRouter>
				<Header />
				<Route path="/" exact component={ResidenceList} />
				<Route path="/residences/new" exact component={ResidenceCreate} />
				<Route path="/residences/edit" exact component={ResidenceEdit} />
				<Route path="/residences/delete" exact component={ResidenceDelete} />
				<Route path="/residences/show" exact component={ResidenceShow} />
			</BrowserRouter>
		</div>
	);
};

export default App;
