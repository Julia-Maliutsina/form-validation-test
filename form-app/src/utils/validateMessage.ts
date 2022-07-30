const validateMessage = (message: string): Boolean => {
  return message.length >= 10 && message.length <= 300;
};

export default validateMessage;
