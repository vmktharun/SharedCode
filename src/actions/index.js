import {
    SIGNIN,
    SIGNIN_SUCCESS,
    SIGNIN_FAILED
} from '../constant';

export const signIn = () => {
    return {
        type: SIGNIN,
    };
};

export const signIn_success = () => {
    return {
        type: SIGNIN_SUCCESS,
    };
};

export const signIn_failed = () => {
    return {
        type: SIGNIN_FAILED,
    };
};



