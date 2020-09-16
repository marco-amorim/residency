import React, { Component } from 'react';
import { reduxForm, Field, formValues } from 'redux-form';
import { asyncValidate, validate } from './ResidenceFormValidations';

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
				{label.includes('CEP') ? this.renderCepSuccess() : null}
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
			<div class="spinner">
				<div class="double-bounce1"></div>
				<div class="double-bounce2"></div>
			</div>
		);
	}

	renderCepSuccess() {
		return (
			<div
				id="cep-message"
				className="ui positive message"
				style={{ display: 'none' }}
			>
				<div className="header">CEP successfully found</div>
			</div>
		);
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

validate(formValues);
asyncValidate(formValues);

export default reduxForm({
	form: 'residenceCreate',
	validate,
	asyncValidate,
	asyncBlurFields: ['cep'],
})(ResidenceForm);
