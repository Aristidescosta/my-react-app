import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

interface IUserLoggedProviderProps {
  children: ReactNode;
}

interface IUserLoggedProviderData {
  userName: string;
  logout: () => void;
}

export const UserLoggedContext = createContext<IUserLoggedProviderData>(
  {} as IUserLoggedProviderData
);

export const UserLoggedProvider: React.FC<IUserLoggedProviderProps> = ({
  children,
}) => {
  const [name, setName] = useState("");

  const handleLogout = useCallback(() => {
    console.log("Logout executado!");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setName("André da Costa");
    }, 3000);
  }, []);
  return (
    <UserLoggedContext.Provider
      value={{ userName: name, logout: handleLogout }}
    >
      {children}
    </UserLoggedContext.Provider>
  );
};
