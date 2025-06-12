// Chuẩn hóa ngày sinh sang định dạng dd/mm/yyyy
export const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

// Chuẩn hóa số điện thoại từ +84 thành 0
export const formatPhoneNumber = (phone) => {
  if (!phone) return "";
  return phone.replace("+84", "0");
};

export const formatGender = (gender) => {
  switch ((gender || "").toLowerCase()) {
    case "male":
      return "Nam";
    case "female":
      return "Nữ";
    case "other":
      return "Khác";
    default:
      return "Không xác định";
  }
};