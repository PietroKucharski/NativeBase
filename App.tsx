import { NativeBaseProvider, extendTheme } from "native-base";
// import DashboardAdmin from "./src/screens/DashboardAdmin";
import SingUp from "./src/screens/SingUp";
import AppContainer from "./src/components/App-container";
import MainScreen from "./src/screens/MainScreen";

export default function App() {
  return (
    <AppContainer>
      <NativeBaseProvider>
        <MainScreen/>
      </NativeBaseProvider>
    </AppContainer>
  );
}
