import {
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED
} from '../constant';

export const signIn = () => {
    return {
        type: SIGNUP,
    };
};

export const signIn_success = () => {
    return {
        type: SIGNUP_SUCCESS,
    };
};

export const signIn_failed = () => {
    return {
        type: SIGNUP_FAILED,
    };
};



