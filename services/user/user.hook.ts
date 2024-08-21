import UserFirebaseRepository from "@/services/user/user-firebase.repository";
import { UserService } from "@/services/user/user.service";
import { TUserService } from "@/types/user-service.type";
import { User } from "@/types/user.type";
import { useCallback, useState } from "react";

export const useUserService = (): TUserService => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const userRepository = UserFirebaseRepository();
  const userservice = new UserService(userRepository);

  const handleError = (error: unknown) => {
    console.error("An error occurred:", error);
    setError(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
    setLoading(false);
  };

  const getUser = useCallback(async (user: User): Promise<User | null> => {
    setLoading(true);
    setError(null);
    try {
      const getuser = await userservice.getUser(user);
      setLoading(false);
      return getuser;
    } catch (err) {
      handleError(err);
      return null;
    }
  }, []);

  const getUsers = useCallback(async (): Promise<User[]> => {
    setLoading(true);
    setError(null);
    try {
      const users = await userservice.getUsers();
      setLoading(false);
      return users;
    } catch (err) {
      handleError(err);
      return [];
    }
  }, []);

  const addUser = useCallback(async (user: User): Promise<User | null> => {
    setLoading(true);
    setError(null);
    try {
      const adduser = await userservice.addUser(user);
      setLoading(false);
      return adduser;
    } catch (err) {
      handleError(err);
      return null;
    }
  }, []);

  return {
    getUser,
    getUsers,
    addUser,
    loading,
    error,
  };
};
