import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../Hooks/auth";
import { AuthRoutes } from "./auth.routes";
import { DashboardRoutes } from "./dashboard.routes";

export function Routes() {
  const { isLogged } = useAuth();
  return (
    <NavigationContainer>
      {isLogged ? <DashboardRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
