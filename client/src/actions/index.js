import residences from '../apis/residences';

export const createResidence = (formValues) => async (dispatch) => {
	residences.post('/residences', formValues);
};
