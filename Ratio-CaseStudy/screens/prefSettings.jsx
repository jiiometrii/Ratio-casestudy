import { React, useState, useEffect } from 'react';
import { Text, View, Switch, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import Divider from '../components/divider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const PrefSettings = ( {navigation, route} ) => {
    // VALUES:
    // distance, distanceIsEnabled
    // selectedGenderOptions
    // minAge, maxAge, ageIsEnabled
    // verifiedIsEnabled, bioIsEnabled
    //declare states
    const [distance, setDistance] = useState(50);
    const [minAge, setMinAge] = useState(18);
    const [maxAge, setMaxAge] = useState(80);

    //switch states
    const [distanceIsEnabled, setDistanceIsEnabled] = useState(false);
    const [ageIsEnabled, setAgeIsEnabled] = useState(false);
    const [verifiedIsEnabled, setVerifiedIsEnabled] = useState(false);
    const [bioIsEnabled, setBioIsEnabled] = useState(false);

    const [selectedGenderOptions, setSelectedGenderOptions] = useState([]);

    //console.log after rendering
    useEffect(() => {
        if (route.params?.genderOptions) {
            setSelectedGenderOptions(route.params.genderOptions);
        }
        console.log('Distance: ' + distance + ' - Show Selected Distance Only: ' + distanceIsEnabled)
        console.log('Age: ' + minAge + ' - ' + maxAge+ ' - Show Selected Age Only: ' + ageIsEnabled)
        console.log('Show Verified: ' + verifiedIsEnabled)
        console.log('Show Bio: ' + bioIsEnabled)
        console.log('Gender Options: ' + selectedGenderOptions.join(', '))
    }, [route.params?.genderOptions, distance, distanceIsEnabled, minAge, maxAge, ageIsEnabled, verifiedIsEnabled, bioIsEnabled, selectedGenderOptions]);

    const handleGenderSelect = () => {
        navigation.navigate('GenderSelection');
    };

    //switch toggles
    const toggleDistSwitch = () => setDistanceIsEnabled(previousState => !previousState);
    const toggleAgeSwitch = () => setAgeIsEnabled(previousState => !previousState);
    const toggleVerifiedSwitch = () => setVerifiedIsEnabled(previousState => !previousState);
    const toggleBioSwitch = () => setBioIsEnabled(previousState => !previousState);

    const screenWidth = Dimensions.get('window').width;

    return (
        <SafeAreaView className="bg-[#EEEEEE]">
            <View className="bg-[#EEEEEE] h-full">
                <View className="flex flex-row justify-end items-end bg-[#FAFAFA] pt-7 pb-3">
                    <Text className="text-xl text-black font-[outfit-bold]">Preference Settings</Text>
                    <Text className="text-[18px] text-black underline mr-4 ml-7 mb-1 font-[outfit-bold]">Done</Text>
                </View>

                <View className="flex flex-col bg-[#FAFAFA] mt-[18px] border-y p-5">
                    <View className="flex flex-row justify-between items-center mb-2">
                        <Text className="font-[zilla] text-[17px]">Distance Preference</Text>
                        <Text className="font-outfit text-[17px]">{distance} km</Text>
                    </View>
                    <MultiSlider
                            min={0}
                            max={100}
                            step={1}
                            values={[distance]}
                            onValuesChange={(values) => setDistance(values[0])}
                            trackStyle={{backgroundColor: '#757575'}}
                            selectedStyle={{backgroundColor: '#73ADC7'}}
                            markerStyle={{backgroundColor: '#D9D9D9'}}
                            sliderLength={screenWidth-40}
                    />
                    <View className="flex flex-row justify-between items-center my-5">
                        <Text className="font-[zilla] text-[17px]">Only show people in this range</Text>
                        <Switch 
                            trackColor={{ false: "#757575", true: "#2EA7D3" }}
                            thumbColor={"#FFFFFF"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleDistSwitch}
                            value={distanceIsEnabled}
                        />
                    </View>

                    <Divider />

                    <View className="flex flex-row justify-between items-center my-3">
                        <Text className="font-[zilla] text-[17px]">Gender</Text>
                        <TouchableOpacity onPress={handleGenderSelect}>
                        {/* {console.log('\nprinting Route.params.genderOptions: ' + route.params.genderOptions)} */}
                            <Text className="font-[zilla] text-[17px]">{selectedGenderOptions.join(', ')} &gt;</Text>
                        </TouchableOpacity>
                    </View>

                    <Divider />

                    <View className="flex flex-row justify-between items-center mt-3">
                        <Text className="font-[zilla] text-[17px]">Age</Text>
                        <Text className="font-[outfit] text-[17px]">{minAge} - {maxAge}</Text>
                    </View>
                    <MultiSlider
                        min={18}
                        max={80}
                        step={1}
                        values={[minAge, maxAge]}
                        onValuesChange={(values) => {
                            setMinAge(values[0]);
                            setMaxAge(values[1]);
                        }}
                        trackStyle={{backgroundColor: '#757575'}}
                        selectedStyle={{backgroundColor: '#73ADC7'}}
                        markerStyle={{backgroundColor: '#D9D9D9'}}
                        sliderLength={screenWidth-40}
                        minMarkerOverlapDistance={22}
                        containerStyle={{alignSelf: 'center' }}
                        allowOverlap={false}
                    />
                    <View className="flex flex-row justify-between items-center my-5">
                        <Text className="font-[zilla] text-[17px]">Only show people in this range</Text>
                        <Switch 
                            trackColor={{ false: "#757575", true: "#2EA7D3" }}
                            thumbColor={"#FFFFFF"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleAgeSwitch}
                            value={ageIsEnabled}
                        />
                    </View>

                    <Divider />

                    <View className="flex flex-row justify-between items-center my-3">
                        <Text className="font-[zilla] text-[17px]">Verified</Text>
                        <Switch 
                            trackColor={{ false: "#757575", true: "#2EA7D3" }}
                            thumbColor={"#FFFFFF"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleVerifiedSwitch}
                            value={verifiedIsEnabled}
                        />
                    </View>

                    <Divider />

                    <View className="flex flex-row justify-between items-center mt-3">
                        <Text className="font-[zilla] text-[17px]">Introduction Bio</Text>
                        <Switch 
                            trackColor={{ false: "#757575", true: "#2EA7D3" }}
                            thumbColor={"#FFFFFF"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleBioSwitch}
                            value={bioIsEnabled}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PrefSettings;
