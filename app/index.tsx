import { router } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl text-red-600">MyComp</Text>
      <Button onPress={() => router.push("/home")} title="Home Button" />
    </View>
  );
}
