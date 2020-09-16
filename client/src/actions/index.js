import residences from '../apis/residences';

export const createResidence = (formValues) => async (dispatch) => {
	residences
		.post('/residences', formValues)
		.then((response) => {
			window.alert('Form sucessfully submitted!');
			console.log(response.status);
		})
		.catch((error) => {
			window.alert('Something went wrong. ' + error);
		});
};
