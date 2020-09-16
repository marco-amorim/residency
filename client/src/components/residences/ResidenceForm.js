import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import cep from 'cep-promise';

import '../../assets/styles/residenceForm.css';

class ResidenceForm extends Component {
	renderInput = ({ input, label, type, meta, placeholder }) => {
		const errorClassName = `field ${
			meta.error && meta.touched && !meta.asyncValidating ? 'error' : ''
		}`;

		return (
			<div className={errorClassName}>
				<label>{label}</label>
				<input
					{...input}
					autoComplete="off"
					type={type}
					placeholder={placeholder}
				/>
				{meta.asyncValidating ? this.renderLoader() : null}
				{label.includes('CEP') ? this.renderCepSuccess(meta) : null}
				{this.renderError(meta)}
			</div>
		);
	};

	renderError({ error, touched, asyncValidating }) {
		if (touched && error && !asyncValidating) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderLoader() {
		return (
			<div className="spinner">
				<div className="double-bounce1"></div>
				<div className="double-bounce2"></div>
			</div>
		);
	}

	renderCepSuccess({ error }) {
		if (!error) {
			return (
				<div
					id="cep-found-message"
					className="ui positive message"
					style={{ display: 'none' }}
				>
					<div className="header">CEP successfully found</div>
				</div>
			);
		}
	}

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
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

const asyncValidate = async (formValues) => {
	try {
		const response = await cep(formValues.cep);
		if (response) {
			document.getElementById('cep-found-message').style.display = null;
		}
	} catch (e) {
		document.getElementById('cep-found-message').style.display = 'none';
		// eslint-disable-next-line no-throw-literal
		throw { cep: 'Your CEP was not found, make sure you typed a valid one' };
	}
};

export default reduxForm({
	form: 'residenceCreate',
	validate,
	asyncValidate,
	asyncBlurFields: ['cep'],
})(ResidenceForm);
