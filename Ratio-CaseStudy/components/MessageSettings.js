import { View, StyleSheet } from "react-native";
import React from "react";
import {Menu, MenuOptions , MenuTrigger } from "react-native-popup-menu";
import { Ionicons } from '@expo/vector-icons';
import { Unmatch , Block , Report } from "./MessageSettingOptions";

const Divider = () => <View className="border-t border-slate-200" />;

const MessageSettings = () => { 
    return (
        <Menu>
            <MenuTrigger style={styles.menuTrigger}>
                <Ionicons name="ellipsis-horizontal-sharp" size={24} color="#81D8D0" />
            </MenuTrigger>
            <MenuOptions customStyles={styles.menuOptions}>
                <Unmatch text="Unmatch" iconName="person-remove" value="unmatch" />
                <Divider />
                <Block text="Block" iconName="block" value="block" />
                <Divider />
                <Report text="Report" iconName="flag-outline" value="report" />
            </MenuOptions>
        </Menu>
    );
};

const styles = StyleSheet.create({
    menuOptions: {
      optionsContainer: {
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 4,
        elevation: 0,
      },
    },
  });

export default MessageSettings;