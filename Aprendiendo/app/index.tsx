import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import styled,{ThemeProvider} from "styled-components/native";
import {lightTheme, darkTheme} from "../styles/theme";
import { useState } from "react";

export default function HomeScreen() {
  const router = useRouter();
  const [dark, setDark] = useState(true)

const toggleTheme = () => {
  setDark((prevTheme) => !prevTheme)
};

const currenTheme = dark? darkTheme : lightTheme;

const datos = {
  id: 1,
  nombre : "Matias",
  apellido: "Pineda"
}

  return (
    <ThemeProvider theme={currenTheme}>
    <Container style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TitleText >Home Screen</TitleText>
     
      <Button title="Go to About" onPress={() => router.push({
        pathname:"/about",
        params:datos,
      })} />
     <Button title="Cambiar tema" onPress={toggleTheme}></Button>
    </Container>
    </ThemeProvider>
  );
}

const TitleText = styled.Text`
  font-size: 45px;
  color: white;
  font-weight: bold;
`;

const Container = styled.View`
  font-size: 45px;
  color: black;
  font-weight: bold;
  background-color: ${({theme})=>theme.colors.background}
`;






// MANERA DE USAR LOS STYLESHEET //

// const styles = StyleSheet.create ({
// text: {
//   color:"green",
//   fontSize:45
// }
// })


