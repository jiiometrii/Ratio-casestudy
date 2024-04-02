import React, { useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const GenderSelect = ({ onSelectionChange }) => {
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
    
        onSelectionChange(newSelection);
    };
    
    const menColor = menSelected ? ['#55b8fe', '#4ce1fb'] : ['#D9D9D9', '#D9D9D9']
    const womenColor = femaleSelected ? ['#dc496e', '#e896c0'] : ['#D9D9D9', '#D9D9D9']
    const bothColor = bothSelected ? ['#fff6a2', '#fde18a', '#fcdb8f'] : ['#D9D9D9', '#D9D9D9']
    const dropshadow = { shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25, shadowRadius: 10, shadowColor: '#000000' }

    return (
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
    );
};

export default GenderSelect;