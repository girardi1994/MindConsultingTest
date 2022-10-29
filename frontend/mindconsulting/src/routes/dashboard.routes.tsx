import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { About } from "@screens/About";
import { Course } from "@screens/Course";
import { TypeCourse } from "@screens/Home/types";

type DashboardRoutes = {
  Home: undefined;
  About:  { item: TypeCourse };
  Course: { item: TypeCourse } | undefined;
};
export type DashboardNavigatorRoutesProps =
  NativeStackNavigationProp<DashboardRoutes>;
const { Navigator, Screen } = createNativeStackNavigator<DashboardRoutes>();

export function DashboardRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="About" component={About} />
      <Screen name="Course" component={Course} />
    </Navigator>
  );
}
