
import { NativeBaseProvider } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';

export default function DashboardUser() {

  return (
    <NativeBaseProvider>
        <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff']} style={{flex: 1}}>

        </LinearGradient>
    </NativeBaseProvider>
  );
}
