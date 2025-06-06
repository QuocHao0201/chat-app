const validateDateOfBirth = (date) => {
  if (!date) return false;
  const parsed = new Date(date);
  return parsed.toString() !== "Invalid Date";
};

export default validateDateOfBirth;
