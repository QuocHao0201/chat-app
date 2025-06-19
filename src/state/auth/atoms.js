import { atom } from "recoil";

const defaultAuth = {
  accessToken: "",
  account: {
    phone: "",
    isActive: true,
    roles: [""],
    user: {
      _id: "",
      fullName: "",
      gender: "",
      dateOfBirth: "",
      settings: {
        theme: "light",
        noti: true,
        language: "vie",
      },
      createdAt: "",
      updatedAt: "",
      __v: 0,
    },
    createdAt: "",
    updatedAt: "",
  },
};
export const sideBarTabs = atom({
  default: "chat",
  key: "sideBarTabs",
});
export const authState = atom({
  key: "authState",
  default: defaultAuth,
});

export const loginParamsState = atom({
  default: null,
  key: "loginParamsState",
});
export const otpParamsState = atom({
  key: "otpParamsState",
  default: "",
});

export const signUpParamsState = atom({
  key: "signUpParamsState",
  default: null,
});

export const updateProfileParamsState = atom({
  key: "updateProfileParamsState",
  default: null, // hoặc {} nếu cần
});
