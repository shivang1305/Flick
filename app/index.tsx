import useAuth from "@/hooks/useAuth";
import { Redirect, router } from "expo-router";
import { View, Text, Button } from "react-native";

const index = () => {
  const { user } = useAuth();
  console.log(user);

  if (user) {
    return <Redirect href="/home" />;
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl text-red-600 mb-5">Flick</Text>
      <Button onPress={() => router.push("login")} title="Login Screen" />
      <Button onPress={() => router.push("chat")} title="Chat Screen" />
    </View>
  );
};

export default index;
