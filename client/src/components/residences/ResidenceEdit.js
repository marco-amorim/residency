import React from 'react';
import { connect } from 'react-redux';

const ResicendeEdit = (props) => {
	console.log(props.residence);
	return <div>ResicendeEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
	return { residence: state.residences[ownProps.match.params.id] };
};

export default connect(mapStateToProps)(ResicendeEdit);
