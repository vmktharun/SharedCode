import {SIGNUP, SIGNUP_FAILED, SIGNUP_SUCCESS} from "../constant";
const initialState = {
    loading: false,
};

export default function reducer(state = {}, action) {
    switch(action.type) {
        case SIGNUP:
            return {
                ...state,
                loading: true
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case SIGNUP_FAILED:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    };
}
