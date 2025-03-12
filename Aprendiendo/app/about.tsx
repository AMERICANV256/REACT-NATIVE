import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, Button } from "react-native";

export default function AboutScreen() {

  const {nombre, apellido, caracteristica} = useLocalSearchParams();

  const router = useRouter();
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <Text>Hola {nombre}, {apellido}, {caracteristica}</Text>

      <Button title="Volver" onPress={() => router.back()}></Button>
    </View>
  );
}

