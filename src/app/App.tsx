import { RoutesApp } from "./routes";
import { UserLoggedProvider } from "./shared/contexts";

export const App = () => {
  return (
    <UserLoggedProvider>
      <RoutesApp />
    </UserLoggedProvider>
  );
};
