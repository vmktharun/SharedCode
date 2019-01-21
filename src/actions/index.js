import {SIGNIN_SUCCESS, SIGNIN_FAILED ,GET_NEWS} from '../constant';

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

export const getNews = () => ({
    type: GET_NEWS,
});


