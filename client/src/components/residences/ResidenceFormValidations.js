import cep from 'cep-promise';

export const validate = (formValues) => {
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

export const asyncValidate = (formValues) => {
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
