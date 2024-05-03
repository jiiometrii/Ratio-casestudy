import { Text , View, SafeAreaView, Image, TextInput, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Pressable, StyleSheet} from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef } from "react";
import SafeViewAndroid from "../components/SafeViewAndroid"
import MessagesContainer from "../components/MessageContainer";
import MessageSettings from "../components/MessageSettings";
import { getList, addItem } from "./conversation";
import { MenuProvider } from "react-native-popup-menu";

const MessagesScreen = ( {navigation, route} ) => {
    const scrollViewRef = useRef();
    const [newMsg, setNewMsg] = useState("");
    const [msgSample, setMsgSample] = useState(getList());
    const [textInputHeight, setTextInputHeight] = useState(Platform.OS === 'ios' ? null : 40); // Initial height

    const handleContentSizeChange = (newHeight) => {
        if (newHeight > textInputHeight) {
            setTextInputHeight(Math.max(newHeight, 40)); // Set minimum height
        } else {
            setTextInputHeight(newHeight);
        }
    };

    const handleSendButton = () => {
        if (newMsg.trim() !== "") {
            addItem({ message: newMsg, user: "sender" });
            setMsgSample(getList());
            setNewMsg("");
            setTextInputHeight(40);
            console.log(msgSample[msgSample.length - 1]);

            scrollViewRef.current?.scrollToEnd({ animated: true });
        }
    }

    const MessageScreenContainer = () => {
        return (
            <SafeAreaView className="bg-[#FFFFFF]" style={SafeViewAndroid.AndroidSafeArea}>
                {/* Top Bar */}
                <View className="px-8 pb-3 border-b border-[#BEBEBE] flex flex-row justify-between items-center stick top-0">
                    <Pressable onPress={() => navigation.goBack()}>
                        <FontAwesome6 name="chevron-left" size={24} color="#81D8D0" />
                    </Pressable>
                    
                    <View className="flex flex-col items-center">
                        <Image source={require('../assets/images/profileIcon.png')} style={{ width: 55, height: 55 }}/>
                        <View className="flex flex-row mt-2">
                            <Text className="text-[13px]">Username</Text>
                            <FontAwesome6 name="chevron-right" size={12} color="#AEAEB1" style={{ marginTop: 4, marginLeft: 4 }} />
                        </View>
                    </View>

                    <MessageSettings />
                </View>

                <KeyboardAvoidingView style={{flex: 1, justifyContent: 'center'}}
                                    behavior={Platform.OS == "ios" ? "padding" : "height"}>
                    {/* Messages */}
                    <ScrollView ref={scrollViewRef}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View className="px-5">
                                {msgSample.map((msg, index) => (
                                    msg.isLink ? 
                                    <MessagesContainer
                                        key={index}
                                        user={msg.user} 
                                        isLast={index === msgSample.length - 1 || msg.user !== msgSample[index + 1]?.user}
                                        restoInfo={{imgLink: msg.restoImg, restoName: msg.restoName, restoCuisine: msg.restoCuisine}} 
                                        isLink={true} 
                                    > 
                                    {/* {console.log('restoImg:', msg.restoImg)}
                                    {console.log('restoName:', msg.restoName)}
                                    {console.log('restoCuisine:', msg.restoCuisine)} */}
                                    </MessagesContainer>
                                    : 
                                    <MessagesContainer 
                                        key={index}
                                        user={msg.user} 
                                        isLast={index === msgSample.length - 1 || msg.user !== msgSample[index + 1]?.user}
                                        message={msg.message} 
                                    />
                                ))}
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>

                    {/* Create Message */}
                    <View className="px-5 my-2 flex flex-row items-center sticky bottom-0">
                        <Image style={{ marginRight: 8}} source={require('../assets/images/ratioLogo.png')} />
                        <TextInput 
                            placeholder="Message"
                            value={newMsg}
                            onChangeText={(text) => setNewMsg(text)}
                            style={{ 
                                flex: 1,
                                borderColor: "gray",
                                borderWidth: 1,
                                borderRadius: 20,
                                padding: 10,
                                paddingTop: Platform.OS === 'ios' ? 10 : null,
                                paddingRight: 27,
                                position: 'relative',
                                height: Platform.OS === 'android' ? Math.max(40, textInputHeight) : null
                            }}
                            multiline={true}
                            textAlignVertical="bottom"
                            numberOfLines={1} 
                            onContentSizeChange={(event) => handleContentSizeChange(event.nativeEvent.contentSize.height)} />
                            <Pressable onPress={handleSendButton} style={{width: 27, height: 27, position: "absolute", right: 28}}>
                                <Image source={require('../assets/images/sendButton.png')} />
                            </Pressable>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    };

    return (
        <MenuProvider customStyles={menuProviderStyles}>
            <MessageScreenContainer />
        </MenuProvider>
    );
};

const menuProviderStyles = StyleSheet.create({
    menuProviderStyles: {
        width: 24,
        height: 24,
    },
    backdrop: {
        backgroundColor: 'black',
        opacity: 0.2,
    }
});

export default MessagesScreen;