const validatePhone = (phone: string): Boolean => {
  let result: Boolean;
  if (/[)(\d\s]$/.test(phone) && /^\+7/.test(phone)) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

export default validatePhone;
