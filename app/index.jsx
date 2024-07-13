import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 justify-between bg-red-50">
        <View className="flex-1 items-center justify-center">
          <Text className="text-4xl p-3">The Content will be here</Text>
        </View>
        <View className="flex-row justify-around bg-stone-900 py-3 border-t border-gray-300 space-x-4">
          <Link href="/" className="text-white lg:border p-2 border-blue-100">
            Home
          </Link>
          <Link
            href="/favourites/page"
            className="text-white lg:border p-2 border-blue-100"
          >
            Go to Favourite
          </Link>
          <Link
            href="/profile/page"
            className="text-white lg:border p-2 border-blue-100"
          >
            Go to Profile
          </Link>
        </View>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}
