import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View, Image, FlatListComponent } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Blackjack = ({ navigation }) => {

    const handleClick = () => {
        let deal = dealerCard.toString();
        let play1 = player1.toString();
        let play2 = player2.toString();
        let newCards1 = newCards.toString();
        navigation.navigate('Strategy', { deal, play1, play2, newCards1});
    };
    
    let [dealerCard, setDealerCard] = useState('back');
    let [player1, setPlayer1] = useState('back');
    let [player2, setPlayer2] = useState('back');
    let [newCards, setNewCards] = useState('');

    const handleDealer = (cardValue) => {
        setDealerCard(cardValue);
    };
    const handlePlayer1 = (cardValue1) => {
        setPlayer1(cardValue1);
    };
    const handlePlayer2 = (cardValue2) => {
        setPlayer2(cardValue2);
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dealer's Hand:                                                  </Text>
            <View style={styles.cardContainer}>
                <Image 
                    source={{ uri: `https://deckofcardsapi.com/static/img/back.png` }} 
                    style={styles.card}
                />
                <Image 
                    source={{ uri: `https://deckofcardsapi.com/static/img/${dealerCard}.png` }} 
                    style={styles.card}
                />
            </View>
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', position: 'absolute', bottom: 550, zIndex: 1}}>
                <Picker
                    selectedValue={dealerCard}
                    style={styles.pickerr}
                    itemStyle={styles.pickerrr}
                    onValueChange={handleDealer}
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
            <Text style={styles.text}>Your Hand:                  </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 20 }}>
            <Button title="View Basic Strategy" onPress={handleClick} />
            </View>
            </View>
            <View style={styles.cardContainer2}>
                <Image 
                    source={{ uri: `https://deckofcardsapi.com/static/img/${player1}.png` }} 
                    style={styles.card}
                />
                <Image 
                    source={{ uri: `https://deckofcardsapi.com/static/img/${player2}.png` }} 
                    style={styles.card}
                />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 195, zIndex: 1}}>
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <Picker
                    selectedValue={player1}
                    style={styles.pickerr}
                    itemStyle={styles.pickerrr}
                    onValueChange={handlePlayer1}
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
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <Picker
                    selectedValue={player2}
                    style={styles.pickerr}
                    itemStyle={styles.pickerrr}
                    onValueChange={handlePlayer2}
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
        width:100,
        height: 150,
        marginHorizontal: 5,
      },
    cardContainer: {
        height: 150,
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

export default Blackjack;