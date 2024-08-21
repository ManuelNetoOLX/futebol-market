import { User } from "@/types/user.type";

export interface IUserRepository {
  getUser(user: User): Promise<User>;
  getUsers(): Promise<User[]>;
  addUser(user: User): Promise<User>;
}
