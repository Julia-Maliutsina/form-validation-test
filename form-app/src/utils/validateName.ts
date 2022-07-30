const validateName = (name: string): Boolean => {
  return /^\w{3,30} \w{3,30}$/.test(name);
};

export default validateName;
