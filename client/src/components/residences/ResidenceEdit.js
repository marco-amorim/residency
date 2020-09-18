import React from 'react';
import { connect } from 'react-redux';
import { fetchResidence } from '../../actions';

class ResidenceEdit extends React.Component {
	componentDidMount() {
		this.props.fetchResidence(this.props.match.params.id);
	}

	render() {
		if (!this.props.residence) {
			return <div class="ui text loader active">Loading</div>;
		}
		return (
			<div>
				<div>{this.props.residence.cep}</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { residence: state.residences[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchResidence })(ResidenceEdit);
