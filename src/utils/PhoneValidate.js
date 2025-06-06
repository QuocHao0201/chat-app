const PhoneValidate = (phone) => {
  const regex = /^[0-9]{9,10}$/;
  return regex.test(phone);
};

export default PhoneValidate;
