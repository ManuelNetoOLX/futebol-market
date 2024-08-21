import { User } from "./user.type";

export type TUserService = {
  getUser: (user: User) => Promise<User | null>;
  getUsers: () => Promise<User[]>;
  addUser: (user: User) => Promise<User | null>;
  loading: boolean;
  error: string | null;
};
