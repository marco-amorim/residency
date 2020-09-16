import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createResidence } from '../../actions';
import cep from 'cep-promise';

import './styles.css';

class ResidenceCreate extends Component {
	renderInput = ({ input, label, type, meta, placeholder }) => {
		const errorClassName = `field ${meta.error && meta.touched ? 'error' : ''}`;

		return (
			<div className={errorClassName}>
				<label>{label}</label>
				<input
					{...input}
					autoComplete="off"
					type={type}
					placeholder={placeholder}
				/>
				{label.includes('CEP') ? (
					<div
						id="cep-message"
						className="ui positive message"
						style={{ display: 'none' }}
					>
						<div className="header">CEP successfully validated</div>
					</div>
				) : null}
				{this.renderError(meta)}
			</div>
		);
	};

	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	onSubmit = (formValues) => {
		this.props.createResidence(formValues);
		formValues = {};
	};

	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form error"
			>
				<Field
					name="cep"
					type="number"
					component={this.renderInput}
					label="Enter your CEP"
					placeholder="CEP"
				/>
				<Field
					name="houseNumber"
					type="number"
					component={this.renderInput}
					label="Enter your House Number"
					placeholder="House Number"
				/>
				<Field
					name="latitude"
					type="number"
					component={this.renderInput}
					label="Enter your Latitude"
					placeholder="Latitude"
				/>
				<Field
					name="longitude"
					type="number"
					component={this.renderInput}
					label="Enter your Longitude"
					placeholder="Longitude"
				/>
				<Field
					name="residents"
					type="number"
					component={this.renderInput}
					label="Enter the number of Residents"
					placeholder="Number of Residents"
				/>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	//TODO: improve this logic

	const errors = {};

	if (!formValues.cep) {
		errors.cep = 'You must enter your CEP';
	}

	if (!formValues.houseNumber) {
		errors.houseNumber = 'You must enter your House Number';
	}

	if (!formValues.latitude) {
		errors.latitude = 'You must enter your Latitude';
	}

	if (!formValues.longitude) {
		errors.longitude = 'You must enter your Longitude';
	}

	if (!formValues.residents) {
		errors.residents = 'You must enter the number of Residents';
	}

	return errors;
};

const asyncValidate = (formValues) => {
	return cep(formValues.cep)
		.then((response) => {
			if (response) {
				document.getElementById('cep-message').style.display = null;
			}
		})
		.catch(() => {
			document.getElementById('cep-message').style.display = 'none';
			// eslint-disable-next-line no-throw-literal
			throw { cep: 'Your CEP was not found, make sure you typed a valid one' };
		});
};

const formWrapped = reduxForm({
	form: 'residenceCreate',
	validate,
	asyncValidate,
	asyncBlurFields: ['cep'],
})(ResidenceCreate);

export default connect(null, { createResidence })(formWrapped);
