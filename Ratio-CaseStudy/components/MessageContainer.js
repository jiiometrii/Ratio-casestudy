import ChatBubble from 'react-native-chat-bubble';
import { Text, View, Image } from "react-native";

// message = content of message
// user if sender or receiver
const MessagesContainer = ({ message , user , isLast=true, isLink=false, restoInfo}) => {
    // isLink ? 
    //     console.log("restoInfo: ", restoInfo)
    //     :
    //     console.log("message: ", message)

    return (
        <View className={`flex flex-row ${user === 'sender' ? 'justify-end' : ""} items-end `}>
            {(isLast && user === 'receiver') && <Image source={require('../assets/images/profileIcon.png')} style={{ width: 37, height: 37, marginRight: isLast ? 4 : 0 }}/>}
            <ChatBubble
            isOwnMessage={user === 'sender' ? true : false}
            bubbleColor={user === 'sender' ? '#81D8D0' : '#E9E9EB'}
            tailColor={user === 'sender' ? '#81D8D0' : '#E9E9EB'}
            withTail={isLast}
            // onPress={() => console.log("Bubble Pressed!")}
            style={{ marginLeft: (user === 'receiver' && !isLast) ? 41 : 0, marginBottom: isLast ? 10 : 0}}
            >
            {isLink ? 
                <View className="flex flex-col justify-start">
                    <Image style={{marginTop: 4}} resizeMode='cover' height={220} source={require('../assets/images/PerlaRestaurante.png')} className/>
                    <Text className="font-semibold mt-2"> {restoInfo.restoName} </Text>
                    <Text>{restoInfo.restoCuisine}</Text>
                </View>
                : <Text>{message}</Text> }
            {/* <Text> {message} </Text> */}
            </ChatBubble>
        </View>
        
    );
};

export default MessagesContainer;