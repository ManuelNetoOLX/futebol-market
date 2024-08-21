import { User } from "@/types/user.type";
import { IUserRepository } from "./user.repository";

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async getUser(user: User): Promise<User> {
    try {
      return await this.userRepository.getUser(user);
    } catch (error) {
      console.error("An error occurred while fetching the user:", error);
      throw error;
    }
  }

  async getUsers(): Promise<User[]> {
    try {
      return await this.userRepository.getUsers();
    } catch (error) {
      console.error("An error occurred while fetching the users:", error);
      throw error;
    }
  }

  async addUser(user: User): Promise<User> {
    try {
      return await this.userRepository.addUser(user);
    } catch (error) {
      console.error("An error occurred while adding the user:", error);
      throw error;
    }
  }
}
