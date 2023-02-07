

import { NativeBaseProvider, Box, Center, Text, StatusBar, VStack } from "native-base";
import { Roboto_700Bold, Roboto_500Medium, Roboto_400Regular, useFonts } from "@expo-google-fonts/roboto"
import { THEME } from './src/styles/theme';
import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";
import { Routes } from "./src/routes";
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_500Medium, Roboto_400Regular })

  return (
    <NativeBaseProvider theme={THEME}>
      <VStack flex={1} bg="gray.900">


        {fontsLoaded ? <Routes /> : <Loading />}
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent />
      </VStack>
    </NativeBaseProvider>
  );
}
