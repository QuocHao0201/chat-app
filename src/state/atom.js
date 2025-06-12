// src/recoil/authAtom.js
import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    accessToken: "",
    account: {
        phone: "",
        isActive: true,
        roles: [
            ""
        ],
        user: {
            _id: "",
            fullName: "",
            gender: "",
            dateOfBirth: "",
            settings: {
                theme: "light",
                noti: true,
                language: "vie"
            },
            createdAt: "",
            updatedAt: "",
            __v: 0
        },
        createdAt: "",
        updatedAt: ""
    }
}
});
