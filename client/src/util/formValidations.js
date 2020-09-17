export const validateLatitudeAndLongitude = (formValues, errors) => {
	let latitudeNumber;
	let longitudeNumber;

	formValues.latitude
		? (latitudeNumber = Number(document.getElementById('latitude').value))
		: (latitudeNumber = 0);

	formValues.longitude
		? (longitudeNumber = Number(document.getElementById('longitude').value))
		: (longitudeNumber = 0);

	if (latitudeNumber < -90 || latitudeNumber > 90) {
		errors.latitude = 'Invalid Latitude';
	}

	if (longitudeNumber < -180 || longitudeNumber > 180) {
		errors.longitude = 'Invalid Longitude';
	}
};
