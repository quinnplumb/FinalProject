import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View, Image, FlatListComponent } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SecondDeal = ({ navigation, route }) => {
    const {deal, play1, play2, newCards} = route.params;
    const card = newCards;

    const handleClick = () => {
        const newCards = reDeal.toString();
        navigation.navigate('Strategy', { deal, play1, play2, newCards });
    };
    
    const [reDeal, setReDeal] = useState('back');

    const handleReDeal = (cardValue) => {
        setReDeal(cardValue);
    };
    
    
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image 
                    source={{ uri: `https://deckofcardsapi.com/static/img/${reDeal}.png` }} 
                    style={styles.card}
                />
            </View>
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', position: 'absolute', bottom: 400, zIndex: 1}}>
                <Picker
                    selectedValue={reDeal}
                    style={styles.pickerr}
                    itemStyle={styles.pickerrr}
                    onValueChange={handleReDeal}
                >
                    <Picker.Item label="Select value" value="back" />
                    <Picker.Item label="Ace of Spades" value="AS" />
                    <Picker.Item label="Ace of Hearts" value="AH" />
                    <Picker.Item label="Ace of Clubs" value="AC" />
                    <Picker.Item label="Ace of Diamonds" value="AD" />

                    <Picker.Item label="King of Spades" value="KS" />
                    <Picker.Item label="King of Hearts" value="KH" />
                    <Picker.Item label="King of Clubs" value="KC" />
                    <Picker.Item label="King of Diamonds" value="KD" />

                    <Picker.Item label="Queen of Spades" value="QS" />
                    <Picker.Item label="Queen of Hearts" value="QH" />
                    <Picker.Item label="Queen of Clubs" value="QC" />
                    <Picker.Item label="Queen of Diamonds" value="QD" />

                    <Picker.Item label="Jack of Spades" value="JS" />
                    <Picker.Item label="Jack of Hearts" value="JH" />
                    <Picker.Item label="Jack of Clubs" value="JC" />
                    <Picker.Item label="Jack of Diamonds" value="JD" />

                    <Picker.Item label="10 of Spades" value="0S" />
                    <Picker.Item label="10 of Hearts" value="0H" />
                    <Picker.Item label="10 of Clubs" value="0C" />
                    <Picker.Item label="10 of Diamonds" value="0D" />

                    <Picker.Item label="9 of Spades" value="9S" />
                    <Picker.Item label="9 of Hearts" value="9H" />
                    <Picker.Item label="9 of Clubs" value="9C" />
                    <Picker.Item label="9 of Diamonds" value="9D" />

                    <Picker.Item label="8 of Spades" value="8S" />
                    <Picker.Item label="8 of Hearts" value="8H" />
                    <Picker.Item label="8 of Clubs" value="8C" />
                    <Picker.Item label="8 of Diamonds" value="8D" />

                    <Picker.Item label="7 of Spades" value="7S" />
                    <Picker.Item label="7 of Hearts" value="7H" />
                    <Picker.Item label="7 of Clubs" value="7C" />
                    <Picker.Item label="7 of Diamonds" value="7D" />

                    <Picker.Item label="6 of Spades" value="6S" />
                    <Picker.Item label="6 of Hearts" value="6H" />
                    <Picker.Item label="6 of Clubs" value="6C" />
                    <Picker.Item label="6 of Diamonds" value="6D" />

                    <Picker.Item label="5 of Spades" value="5S" />
                    <Picker.Item label="5 of Hearts" value="5H" />
                    <Picker.Item label="5 of Clubs" value="5C" />
                    <Picker.Item label="5 of Diamonds" value="5D" />

                    <Picker.Item label="4 of Spades" value="4S" />
                    <Picker.Item label="4 of Hearts" value="4H" />
                    <Picker.Item label="4 of Clubs" value="4C" />
                    <Picker.Item label="4 of Diamonds" value="4D" />

                    <Picker.Item label="3 of Spades" value="3S" />
                    <Picker.Item label="3 of Hearts" value="3H" />
                    <Picker.Item label="3 of Clubs" value="3C" />
                    <Picker.Item label="3 of Diamonds" value="3D" />

                    <Picker.Item label="2 of Spades" value="2S" />
                    <Picker.Item label="2 of Hearts" value="2H" />
                    <Picker.Item label="2 of Clubs" value="2C" />
                    <Picker.Item label="2 of Diamonds" value="2D" />
                </Picker>
            </View>
            
            <View style={{position: 'absolute', bottom: 375, flexDirection: 'row'}}>
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 20, bottom: -300 }}>
                <Button title="Confirm Card" onPress={handleClick} />
            </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text></Text>
            </View>
        </View>
        
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#35654d',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        textAlign: 'left',
        fontSize: 18,
        padding: 10,
        color: 'white'
    },
    card: {
        width: 150,
        height: 225,
        marginHorizontal: 5,
      },
    cardContainer: {
        height: 300,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardContainer2: {
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 220
    },
    pickerr: {
        height: 50,
        width: 200
    },
    pickerrr:{
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    }

  });

export default SecondDeal;