import { View, Text, Button } from "react-native";


export const Home = ({ navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Button title="click" onPress={() => navigation.navigate("MainScreen")} />
    </View>
  );
};