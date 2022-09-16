import { createContext, ReactNode } from "react"

interface IUserLoggedProviderProps{
  children: ReactNode
}

interface IUserLoggedProviderData{
  userName: string;
}

const UserLoggedContext = createContext<IUserLoggedProviderData>({} as IUserLoggedProviderData)

export const UserLoggedProvider: React.FC<IUserLoggedProviderProps> = ({children}) =>{
  return(
    <UserLoggedContext.Provider value={{userName: "Aristides"}}>
      {children}
    </UserLoggedContext.Provider>
  )
}