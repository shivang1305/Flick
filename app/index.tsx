import { TailwindProvider } from "tailwind-rn";
import utilities from "../tailwind.json";
import MyComp from "@/components/MyComp";

export default function Index() {
  return (
    <TailwindProvider
      utilities={utilities}
      colorScheme={"dark"}
      children={<MyComp />}
    />
  );
}
