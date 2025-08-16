export const  checkIfValidData = (email , password , name) => {
   const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
   const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   const isValidName = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);

   if(!isValidName) return "Invalid Name";
   if(!isValidEmail) return "Invalid Email";
   if(!isValidPassword) return "Invalid Password";
   return null;
}