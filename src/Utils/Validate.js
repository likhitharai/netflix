const checkValidData = ( email, password) => {
     
    //const isNameValid; = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if (!isNameValid) return "Name is not valid!";
    if (!isEmailValid) return "Email ID is not valid!";
    if (!isPasswordValid) return "Password is not valid!";

    return ;

}
export default checkValidData;

/* const checkValidData = (name, email, password) => {
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isNameValid) return "Name is not valid!";
    if (!isEmailValid) return "Email ID is not valid!";
    if (!isPasswordValid) return "Password is not valid!";

    return "null";

}
export default checkValidData;*/