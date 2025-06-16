/* eslint-disable no-useless-catch */
// src/recoil/authAtom.js
import { selector } from "recoil";
import AuthService from "../../api/auth/authService";
import { loginParamsState, otpParamsState, signUpParamsState } from "./atoms";
const authService = new AuthService();

export const loginSelector = selector({
  key: "loginSelector",
  get: async ({ get }) => {
    try {
      const payload = get(loginParamsState);
      if (!payload) return null;

      const dataLogin = await authService.login(
        payload.phoneNumber,
        payload.password
      );

      if (!dataLogin.success) {
        throw new Error(dataLogin.message);
      } else {
        localStorage.setItem("auth", JSON.stringify(dataLogin.data));
        return dataLogin.data;
      }
    } catch (err) {
      if (err.response?.data?.message) {
        throw new Error(err.response?.data?.message);
      } else {
        throw new Error("Đăng nhập thất bại!");
      }
    }
  },
});

export const sendOTPSelector = selector({
  key: "sendOTPSelector",
  get: async ({ get }) => {
    try {
      const email = get(otpParamsState);
      if (email) {
        const res = await authService.sendOTP(email);
        console.log("sendOTPSelector res", res);
        return res.statusCode == 200;
      }
    } catch (err) {
      if (err.response?.data?.message) {
        throw new Error(err.response?.data?.message);
      } else {
        throw err;
      }
    }
  },
});

export const signUpSelector = selector({
  key: "signUpSelector",
  get: async ({ get }) => {
    try {
      const payload = get(signUpParamsState);
      if (payload) {
        const res = await authService.signUp(payload);
        if (res) {
          const dataLogin = await authService.login(
            payload.phone,
            payload.password
          );

          if (!dataLogin.success) {
            throw new Error(dataLogin.message);
          } else {
            localStorage.setItem("auth", JSON.stringify(dataLogin.data));
            return dataLogin.data;
          }
        }
      }
      return false;
    } catch (err) {
      if (err.response?.data?.message) {
        throw new Error(err.response?.data?.message);
      } else {
        throw err;
      }
    }
  },
});
