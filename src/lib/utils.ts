import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import CryptoJS from 'crypto-js';
import { SECRETKEY } from "@/lib/envs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export const encryptCookie = (data: any) => {
  const ciphertext = CryptoJS.AES.encrypt(data, SECRETKEY!).toString();
  return ciphertext;
}

export const  decryptCookie = (data: any) => {
  const bytes = CryptoJS.AES.decrypt(data, SECRETKEY!);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}
