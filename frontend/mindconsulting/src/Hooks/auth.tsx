import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { Alert } from "react-native";
import { instance } from "../config";


type UserType = {
  email: string;
  name: string;
};

type AuthUserType = {
  email: string;
  password: string;
};

type CreateUserType = {
  email: string;
  name: string;
  password: string;
};

type AuthContextData = {
  user: UserType;
  isLogged: boolean;
  signUser: (data: AuthUserType) => void;
  signUp: (data: CreateUserType, navigate: () => void) => void;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const USER_COLECTION = "@storage:users";

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({} as UserType);

  const loadUser = async () => {
    try {
      const storeUser = await AsyncStorage.getItem(USER_COLECTION);

      if (storeUser) {
        const userData = JSON.parse(storeUser) as UserType;
        setUser(userData);
        await AsyncStorage.setItem(USER_COLECTION, JSON.stringify(userData));
        setIsLogged(true);
        return;
      }
      setUser({} as UserType);
      setIsLogged(false);
    } catch (e) {
      setUser({} as UserType);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const signUser = async (data: AuthUserType) => {
    try {
      const response = await instance.post("loginUser", {
        ...data,
      });
      const { name, email } = response.data;
      await AsyncStorage.setItem(
        USER_COLECTION,
        JSON.stringify({ name, email })
      );
      setUser({ name, email });
      loadUser();
    } catch (error) {
      Alert.alert("Erro", "Confira suas credenciasi");
    }
  };

  const signOut = async () => {
    await AsyncStorage.setItem(USER_COLECTION, "");
    setUser({} as UserType);
    loadUser();
  };

  const signUp = async (data: CreateUserType, callback: () => void) => {
    try {
      await instance.post("createUser", {
        ...data,
      });
      callback()
    } catch (error) {
      Alert.alert("Erro", "Erro ao cadastrar sua conta");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogged,
        signUser,
        signOut,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
