import axios from "axios";

export const login = async (loginData) => {

    try {

        const { data } = await axios.post('api/user/login', loginData);
        console.log("Login Frontend API ==> ", data);
        return data;
    } catch (error) {
        console.error("Login API error Frontend:", error);
    }

}

export const singup = async (signUpData) => {
    try {
        const { data } = await axios.post('api/user/signup', signUpData);
        // console.log("SignUp Frontend API ==> ", data);
        return data;
    } catch (error) {
        console.log("SignUp API error Frontend:", error)
    }

}