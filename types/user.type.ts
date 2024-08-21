import { Address } from "./address.type";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: Address;
  dateOfBirth: Date;
  avatarImgUrl: Date;
}
