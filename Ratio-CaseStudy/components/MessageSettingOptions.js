import { MenuOption } from "react-native-popup-menu";
import { Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const Unmatch = ({ text, iconName, value }) => (
    <MenuOption
      onSelect={() => alert(`You clicked ${value}`)}
      customStyles={{
        optionWrapper: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          paddingVertical: 8,
        },
      }}
    >
      <Text>{text}</Text>
      <Ionicons name={iconName} size={20} color="#1C1C1E" />
    </MenuOption>
   );

export const Block = ({ text, iconName, value }) => (
    <MenuOption
        onSelect={() => alert(`You clicked ${value}`)}
        customStyles={{
        optionWrapper: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
          paddingVertical: 8,
        },
        }}
    >
        <Text>{text}</Text>
        <MaterialIcons name={iconName} size={20} color="#1C1C1E" />
    </MenuOption>
);

export const Report = ({ text, iconName, value }) => (
    <MenuOption
        onSelect={() => alert(`You clicked ${value}`)}
        customStyles={{
        optionWrapper: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            paddingVertical: 8,
        },
        }}
    >
        <Text>{text}</Text>
        <Ionicons name={iconName} size={20} color="#1C1C1E" />
    </MenuOption>
);