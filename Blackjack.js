import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native';


const Blackjack = ({ navigation }) => {
    const [dealerCard, setDealerCard] = useState('back');

    const handleDealer = (cardValue) => {
        setDealerCard(cardValue);
    };
    
    return (
        
        <View style={styles.container}>
            <Text style={styles.text}>Dealer's Hand:</Text>
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
            <View style={{flex: 1, justifyContent: 'left', alignItems: 'left'}}>
                <Picker
                    selectedValue={dealerCard}
                    style={styles.pickerr}
                    itemStyle={styles.pickerrr}
                    onValueChange={handleDealer}
                >
                    <Picker.Item label="King of Spades" value="KS" />
                    <Picker.Item label="King of Hearts" value="KH" />
                    <Picker.Item label="King of Clubs" value="KC" />
                    <Picker.Item label="King of Diamonds" value="KD" />
                </Picker>
            </View>
            <Text style={styles.text}>Your Hand:</Text>
            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Go to Other Screen" onPress={() => navigation.navigate('Strategy')} />
            </View>
            
        </View>
        
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    pickerr: {
        height: 50,
        width: 200,
    },
    pickerrr:{
        fontSize: 14,
        color: 'white'
    }

  });

export default Blackjack;