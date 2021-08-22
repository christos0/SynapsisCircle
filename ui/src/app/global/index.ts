import { atom } from "recoil";

export const currentLanguageState = atom<string>({
  key: "currentLanguageState",
  default: "en",
});
