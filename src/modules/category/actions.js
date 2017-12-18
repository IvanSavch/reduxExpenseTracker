import {createRequestTypes, action, REQUEST, SUCCESS, FAILURE} from './../../utils/actions';

export const LOAD_CATEGORIES = createRequestTypes('LOAD_CATEGORIES');

export const loadCategories = {
    request: () => action(LOAD_CATEGORIES[REQUEST]),
    success: response => action(LOAD_CATEGORIES[SUCCESS], {response}),
    failure: error => action(LOAD_CATEGORIES[FAILURE], {error})
};
