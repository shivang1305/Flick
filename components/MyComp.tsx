import { Link, router } from "expo-router";
import { View, Text, Button, Pressable } from "react-native";
import { useTailwind } from "tailwind-rn";

const MyComp = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex-1 justify-center items-center")}>
      <Text style={tailwind("text-orange-500 text-3xl")}>MyComp</Text>
      <Button onPress={() => router.push("/home")} title="Home Button" />
    </View>
  );
};

export default MyComp;
