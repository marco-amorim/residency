import residences from '../apis/residences';
import { CREATE_RESIDENCE } from '../actions/types';

// export const createResidence = (formValues) => async (dispatch) => {
// 	residences
// 		.post('/residences', formValues)
// 		.then((response) => {
// 			window.alert('Form sucessfully submitted!');
// 			console.log(response.status);
// 		})
// 		.catch((error) => {
// 			window.alert('Something went wrong. ' + error);
// 		});
// };

export const createResidence = (formValues) => async (dispatch) => {
	const response = await residences.post('/residences', { ...formValues });

	dispatch({ type: CREATE_RESIDENCE, payload: response.data });
};
