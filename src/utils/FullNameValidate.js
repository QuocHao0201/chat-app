const validateFullName = (fullName) => {
  return typeof fullName === "string" && fullName.trim().length > 0;
};

export default validateFullName;
