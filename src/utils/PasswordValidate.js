const PasswordValidate = (password) => {
  // Phải có ít nhất 6 ký tự
  return typeof password === "string" && password.length >= 6;
};

export default PasswordValidate;
