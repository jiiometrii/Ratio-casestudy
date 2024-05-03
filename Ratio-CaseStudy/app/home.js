import { Button , View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View className="flex items-center justify-center">
        <Button
            title="Preference Settings"
            onPress={() => navigation.navigate('PrefSettings')}
        />
        <Button
            title="Messages"
            onPress={() => navigation.navigate('MessagesScreen')}
        />
    </View>
  );
}

export default Home;