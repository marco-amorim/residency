import React from 'react';
import { connect } from 'react-redux';
import { fetchResidences } from '../../actions';

class ResidenceList extends React.Component {
	componentDidMount() {
		this.props.fetchResidences();
	}

	renderButtons(residence) {
		return (
			<div className="right floated content">
				<button className="ui button primary">Edit</button>
				<button className="ui button negative">Delete</button>
			</div>
		);
	}

	renderList() {
		return this.props.residences.map((residence) => {
			return (
				<div className="item" key={residence.id}>
					{this.renderButtons(residence)}
					<i className="large middle aligned icon home" />
					<div className="content">
						CEP: {residence.cep}
						<div className="description">Number: {residence.houseNumber}</div>
						<div className="description">Residents: {residence.residents}</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h2>Residences</h2>
				<div className="ui celled list">{this.renderList()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { residences: Object.values(state.residences) };
};

export default connect(mapStateToProps, { fetchResidences })(ResidenceList);
