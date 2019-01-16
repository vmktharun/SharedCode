import {SIGNIN_SUCCESS, SIGNIN_FAILED } from '../constant';

export const login = place => {
    return {
        type: SIGNIN_SUCCESS,
        place
    };
};

export const loginfailed = id => {
    return {
        type: SIGNIN_FAILED,
        id
    };
};
