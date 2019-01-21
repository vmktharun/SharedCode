import {SIGNIN, SIGNIN_FAILED, SIGNIN_SUCCESS} from "../constant";
const initialState = {
    loading: false,
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SIGNIN:
            return {
                ...state,
                loading: true
            };
        case SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case SIGNIN_FAILED:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    };
}
