import { SignIn } from "./src/screens/SignIn";
import { Loading } from "./src/components/Loading";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme/index";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return(
  <ThemeProvider theme={theme}>
    <StatusBar 
    barStyle="light-content"
    backgroundColor="transparen"
    translucent
    />
    {fontsLoaded ? <SignIn /> : <Loading/>}
  </ThemeProvider>
  )
}
