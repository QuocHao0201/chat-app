// src/recoil/authAtom.js
import { atom, selector } from "recoil";
import { login } from "../api/auth/login";

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

export const authState = atom({
  key: "authState",
  default: defaultAuth,
  //   effects_UNSTABLE: [
  //     ({ setSelf, onSet }) => {
  //       const savedData = localStorage.getItem("auth");
  //       if (savedData != null) {
  //         setSelf(JSON.parse(savedData));
  //       }

  //       onSet((newValue, _, isReset) => {
  //         if (isReset) {
  //           localStorage.removeItem("auth");
  //         } else {
  //           localStorage.setItem("auth", JSON.stringify(newValue));
  //         }
  //       });
  //     },
  //   ],
});

// Selector: Truy cập và cập nhật accessToken
export const authTokenSelector = selector({
  key: "authTokenSelector",
  get: ({ get }) => {
    const auth = get(authState);
    return auth.accessToken;
  },
  set: ({ get, set }, newValue) => {
    const prev = get(authState);
    set(authState, {
      ...prev,
      accessToken: newValue,
    });
  },
});

// Selector: Truy cập và cập nhật user
export const authUserSelector = selector({
  key: "authUserSelector",
  get: ({ get }) => {
    const auth = get(authState);
    return auth.account.user;
  },
  set: ({ get, set }, newUser) => {
    const prev = get(authState);
    set(authState, {
      ...prev,
      account: {
        ...prev.account,
        user: newUser,
      },
    });
  },
});

export const phoneAtom = atom({
  default: "",
  key: "phoneAtom",
});
export const passwordAtom = atom({
  default: "",
  key: "passwordAtom",
});
export const loginStateAtom = atom({
  default: false,
  key: "loginStateAtom",
});

export const loginSelector = selector({
  key: "loginSelector",
  get: async ({ get }) => {
    const password = get(passwordAtom);
    const phoneNumber = get(phoneAtom);
    const isLogin = get(loginStateAtom);
    if (!isLogin) return null;

    try {
      const dataLogin = await login(phoneNumber, password);

      if (!dataLogin.success) {
        console.log("data login fail", dataLogin);

        return dataLogin.message;
      } else {
        console.log("data login", dataLogin);

        localStorage.setItem("auth", JSON.stringify(dataLogin.data));
        return dataLogin.data;
      }
    } catch (err) {
      //   setModalMessageLoginError(
      //     err.response?.data?.message || "❌ Đăng nhập thất bại!"
      //   );
      //   setShowModalLoginError(true);
      //   setLoginStatus("Vui lòng thử lại.");
      console.log("data login err", dataLogin);

      return null;
    }
  },
});
