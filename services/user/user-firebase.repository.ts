import { IUserRepository } from "./user.repository";
import RealtimeDatabaseHttpClient from "@/core/realtime-database-http.client";
import { User } from "@/types/user.type";

const API_URL_USERS = "users";
const API_URL_USER = "users/[id]";

export default function createUserFirebaseRepository(): IUserRepository {
  const realtimeDB = RealtimeDatabaseHttpClient();

  async function getUser(user: User): Promise<User> {
    try {
      return await realtimeDB.get(API_URL_USER.replace("[id]", `${user.id}`));
    } catch (error) {
      console.error("An error occurred while fetching the user:", error);
      throw error;
    }
  }

  async function getUsers(): Promise<User[]> {
    try {
      const users = await realtimeDB.get(API_URL_USERS);
      return Object.keys(users).map((key) => ({ ...users[key], id: key }));
    } catch (error) {
      console.error("An error occurred while fetching the users:", error);
      throw error;
    }
  }

  async function addUser(user: User): Promise<User> {
    try {
      return await realtimeDB.post(API_URL_USERS, user);
    } catch (error) {
      console.error("An error occurred while adding the user:", error);
      throw error;
    }
  }

  return {
    getUser,
    getUsers,
    addUser,
  };
}
