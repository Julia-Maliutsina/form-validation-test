const validateEmail = (email: string): Boolean => {
  return /^\S+@\S+\.\S+$/.test(email);
};

export default validateEmail;
