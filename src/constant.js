export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILED = 'SIGNIN_FAILED';
export const GET_NEWS = 'GET_NEWS';

export function SignUp(username ,password ) {
    return () => {
        fetch("http://sso-poc.eastus.cloudapp.azure.com/signup", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                "user" : {
                    "email" :username ,
                    "password" : password
                }
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('json:', responseJson)
                // if(responseJson.message === "Amount Updated"){
                //     //dispatch(updateSuccess(responseJson))
                //     alert("Amount Updated")
                // }else{
                //     alert("Update Failed")
                // }
            })
    }
}
