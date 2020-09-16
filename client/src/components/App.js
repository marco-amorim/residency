import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import { Route } from 'react-router-dom';
import ResidenceList from './residences/ResidenceList';
import ResidenceCreate from './ResidenceCreate';
import ResidenceEdit from './residences/ResidenceEdit';
import ResidenceDelete from './residences/ResidenceDelete';
import ResidenceShow from './residences/ResidenceShow';

const App = () => {
	return (
		<div className="ui container">
			<BrowserRouter>
				<Header />
				<Route path="/" exact component={ResidenceList} />
				<Route path="/residence/new" exact component={ResidenceCreate} />
				<Route path="/residence/edit" exact component={ResidenceEdit} />
				<Route path="/residence/delete" exact component={ResidenceDelete} />
				<Route path="/residence/show" exact component={ResidenceShow} />
			</BrowserRouter>
		</div>
	);
};

export default App;
