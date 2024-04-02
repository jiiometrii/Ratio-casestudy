import {React, useState }from 'react';
import { TouchableOpacity, SafeAreaView, Text, View, Pressable } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
// import GenderSelect from '../components/genderSelect';
import { useNavigation } from '@react-navigation/native';
import { handleSelectionChange } from '../components/util';

const GenderSelection = ({ route }) => {
    const navigation = useNavigation();

    let genderOptions = [];

    const handleConfirm = () => {
        navigation.goBack();
    };

    const [menSelected, setMenSelected] = useState(true);
    const [femaleSelected, setFemaleSelected] = useState(false);
    const [bothSelected, setBothSelected] = useState(false);

    const handlePress = (selection) => {
        let newSelection = {
            men: menSelected,
            female: femaleSelected,
            both: bothSelected
        };
    
        if (selection === 'men') {
            newSelection.men = !menSelected;
            if (femaleSelected) {
                newSelection.both = !bothSelected;
            }
        } else if (selection === 'female') {
            newSelection.female = !femaleSelected;
            if (menSelected) {
                newSelection.both = !bothSelected;
            }
        } else if (selection === 'both') {
            newSelection.both = !bothSelected;
            if (!menSelected && !femaleSelected) {
                newSelection.men = true;
                newSelection.female = true;
            } else if (menSelected && !femaleSelected) {
                newSelection.female = true;
            } else if (!menSelected && femaleSelected) {
                newSelection.men = true;
            } else {
                newSelection.men = false;
                newSelection.female = false;
            }
        }
    
        setMenSelected(newSelection.men);
        setFemaleSelected(newSelection.female);
        setBothSelected(newSelection.both);

        if (newSelection.both) {
            genderOptions = ['Men', 'Women'];
        } else if (newSelection.men) {
            genderOptions = ['Men'];
        } else if (newSelection.female) {
            genderOptions = ['Women'];
        }

        console.log(genderOptions);
    };
    
    const menColor = menSelected ? ['#55b8fe', '#4ce1fb'] : ['#D9D9D9', '#D9D9D9']
    const womenColor = femaleSelected ? ['#dc496e', '#e896c0'] : ['#D9D9D9', '#D9D9D9']
    const bothColor = bothSelected ? ['#fff6a2', '#fde18a', '#fcdb8f'] : ['#D9D9D9', '#D9D9D9']
    const dropshadow = { shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25, shadowRadius: 10, shadowColor: '#000000' }

    return (
        <SafeAreaView className="bg-white">
            {/* full container */}
            <View className="flex flex-col bg-white p-5 justify-between h-full">
                {/* top container */}
                <View>
                    <Text className="text-center text-xl text-black font-[outfit-bold]">Gender</Text>
                    <View className="mt-5">
                        <Text className="text-left text-[22px] font-[outfit-bold]">I'm looking to connect with...</Text>
                        <Text className="mt-3 text-left text-base font-[zilla] text-[#777370]">Select the options below who you would like to meet</Text>
                    </View>
                    <View>
                        <Pressable onPress={() => handlePress('men')} 
                                    style={menSelected ? dropshadow : null}>
                        <LinearGradient
                            colors={menColor}
                            style={{
                                marginTop: 10,
                                width: '100%',
                                padding: 24,
                                borderRadius: 10,
                            }}
                        >
                            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Men</Text>
                        </LinearGradient>
                        </Pressable>

                        <Pressable onPress={() => handlePress('female')} 
                                    style={femaleSelected ? dropshadow : null}>
                        <LinearGradient
                            colors={womenColor}
                            style={{
                                marginTop: 10,
                                width: '100%',
                                padding: 24,
                                borderRadius: 10,
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.25,
                                shadowRadius: 10,
                                shadowColor: '#000000',
                            }}
                        >
                            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Female</Text>
                        </LinearGradient>
                        </Pressable>

                        <Pressable onPress={() => handlePress('both')} 
                                    style={bothSelected ? dropshadow : null}>
                        <LinearGradient
                            colors={bothColor}
                            style={{
                                marginTop: 10,
                                width: '100%',
                                padding: 24,
                                borderRadius: 10,
                            }}
                        >
                            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Both</Text>
                        </LinearGradient>
                        </Pressable>
                    </View>
                    <Text className="mt-3 text-left text-base font-[zilla] text-[#777370]">Your matches will reflect the new selected option so that it fits your preference</Text>
                </View>

                {/* bottom container */}
                <TouchableOpacity
                    title="Confirm"
                    style={{ backgroundColor: '#000000', color: 'white', borderRadius: 10, padding: 24, width: '100%' }}
                    onPress={handleConfirm}>
                    <Text className="text-center text-white font-[outfit-bold] text-[20px] underline">Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default GenderSelection;