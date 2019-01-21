// import {SIGNIN, SIGNIN_FAILED, SIGNIN_SUCCESS} from "../constant";
// const initialState = {
//     loading: false,
// };
//
// export default function reducer(state = {}, action) {
//     switch(action.type) {
//         case SIGNIN:
//             return {
//                 ...state,
//                 loading: true
//             };
//         case SIGNIN_SUCCESS:
//             return {
//                 ...state,
//                 loading: false
//             };
//         case SIGNIN_FAILED:
//             return {
//                 ...state,
//                 loading: false
//             };
//         default:
//             return state;
//     };
// }


import {SIGNIN, SIGNIN_FAILED, SIGNIN_SUCCESS} from "../constant";

function success(data) {
    return {
        id: Math.random(),
        flag: true
    };
}

function failed(data) {
    return {
        name: false
    };
}

export default function reducer(state = {}, action) {
    switch(action.type) {
        case SIGNIN:
            return { ...state, loading: true };
        case SIGNIN_SUCCESS:
            return [
                ...state,
                success(action.data)
            ];
        case SIGNIN_FAILED:
            return [
                ...state,
                failed(action.data)
            ];
        default:
            return state;
    };
}
