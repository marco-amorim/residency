import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" className="item">
				Residence App
			</Link>
			<div className="right menu">
				<Link to="/" className="item">
					Heat Map
				</Link>
			</div>
		</div>
	);
};

export default Header;
