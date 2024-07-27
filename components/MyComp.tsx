import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

const MyComp = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex-1 justify-center items-center")}>
      <Text style={tailwind("text-yellow-500")}>MyComp</Text>
    </View>
  );
};

export default MyComp;
