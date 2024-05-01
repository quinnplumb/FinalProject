import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, Image, TouchableOpacity, Button, View, Fetch, UseEffect } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Strategy = ({ navigation, route }) => {
	const {deal, play1, play2} = route.params;
	const dealer = deal;
	const p1 = play1;
	const p2 = play2;
	const currentTotal = p1 + p2;
	
	const [handType, setHandType] = useState('hard'); 
	const [move, setMove] = useState('hit');
	const [total, setTotal] = useState(0);

	useEffect(() => {
	if(p1[0] === 'A'){
		if(p2[0] === '0' || p2[0] === 'J' || p2[0] === 'Q' || p2[0] === 'K'){
			setMove('Stand');
		}
		setHandType('soft');
	}
	}, [play1, play2]);

	useEffect(() => {
		let total = 0;
		if(p1[0] === 'A'){
			total = (total + 11);
		}else if(p1[0] === '0' || p1[0] === 'J' || p1[0] === 'Q' || p1[0] === 'K'){
			total = (total + 10);
		}else{
			const vall = parseInt(play1);
			total = (total + vall);
		}
		if(p2[0] === 'A'){
			total = (total + 11);
		}else if(p2[0] === '0' || p2[0] === 'J' || p2[0] === 'Q' || p2[0] === 'K'){
			total = (total + 10);
		}else{
			const val = parseInt(play2);
			total = (total + val);
		}
		setTotal(total);
		}, [play1, play2]);

	  return (
		<View>
			<Text>Dealer showing: {deal}</Text>
			<View>
			<Image source={{ uri: `https://deckofcardsapi.com/static/img/${deal}.png` }} style={styles.card}/>
			</View>
			<Text>Player total: {total}</Text>
			<Text>Move: {p1[0]} {move}</Text>
		</View>
	  );
	}

// 	const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener('readystatechange', function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// xhr.open('GET', 'https://blackjack-basic-strategy.p.rapidapi.com/hard/17/11');
// xhr.setRequestHeader('X-RapidAPI-Key', 'e339b9a640msh268ce8ad2d9ce0ep1d67cbjsnd774f55fecc0');
// xhr.setRequestHeader('X-RapidAPI-Host', 'blackjack-basic-strategy.p.rapidapi.com');

// xhr.send(data);

	const styles = StyleSheet.create({
		container: {
		 paddingTop: 50
		},
		card: {
			width:100,
			height: 150,
			marginHorizontal: 5,
		  },
		item: {
		  padding: 10,
		  fontSize: 18,
		  height: 54,
		},
		border: {
		  borderWidth: 1,
		  borderColor: "gray",
		},
		container2: {
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
		card2: {
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
	
	export default Strategy;



