export const checkValidData=(userEmail,userPassword)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(userEmail);
    const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(userPassword);
    // const isNameValid=/^[a-zA-Z]+ [a-zA-Z]+$/.test(userName)
    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";
    // if(!isNameValid) return "Name is not valid";
    return null;
}