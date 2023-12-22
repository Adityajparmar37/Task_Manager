import axios from "axios";

export const login = async (loginData) => {

    try {
        const { data } = await axios.post('api/user/login', loginData);
        console.log("Login Frontend API ==> ", data);
        return data;
    } catch (error) {
        // console.log("Login API error Frontend:", error.response.data);
        return error.response.data;
    }

}

export const singup = async (signUpData) => {
    try {
        const { data } = await axios.post('api/user/signup', signUpData);
        // console.log("SignUp Frontend API ==> ", data);
        return data;
    } catch (error) {
        // console.log("SignUp API error Frontend:", error.response.data);
        return error.response.data;
    }

}

export const getUser = () =>
    localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : null;


export const logout = () => {
    localStorage.removeItem('user');
    // localStorage.removeItem('cart');
    document.title = 'FOOD MINE ! '
};