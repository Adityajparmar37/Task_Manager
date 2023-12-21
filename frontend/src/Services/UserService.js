export const login = async ({ email, password }) => {
    console.log("API login ==>", email, " ", password);

}

export const singup = async ({ name, email, password, conformPassword }) => {
    console.log("API login ==>", email, " ", password, " ", name);
}