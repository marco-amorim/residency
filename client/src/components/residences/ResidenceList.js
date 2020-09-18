import React from 'react';
import { connect } from 'react-redux';
import { fetchResidences } from '../../actions';

class ResidenceList extends React.Component {
	componentDidMount() {
		this.props.fetchResidences();
	}

	renderList() {
		return this.props.residences.map((residence) => {
			return (
				<div className="item" key={residence.id}>
					<i className="large middle aligned icon home" />
					<div className="description">CEP: {residence.cep}</div>
					<div className="description">Number: {residence.houseNumber}</div>
					<div className="description">Residents: {residence.residents}</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h2>Residences List</h2>
				<div className="ui celled list">{this.renderList()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { residences: Object.values(state.residences) };
};

export default connect(mapStateToProps, { fetchResidences })(ResidenceList);
