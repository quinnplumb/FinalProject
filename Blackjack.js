import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';


const Blackjack = ({ navigation }) => {
    const dealerCard = 'back';
    
    return (
        
        <View style={styles.container}>
            <Text style={styles.text}>Dealer's Hand:</Text>
            <View style={styles.cardContainer}>
                <Image 
                    source={{ uri: `https://deckofcardsapi.com/static/img/${dealerCard}.png` }} 
                    style={styles.card}
                />
                <Image 
                    source={{ uri: `https://deckofcardsapi.com/static/img/${dealerCard}.png` }} 
                    style={styles.card}
                />
            </View>
            <Text style={styles.text}>Your Hand:</Text>
            

            
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
        textAlign: 'center',
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
  });

export default Blackjack;