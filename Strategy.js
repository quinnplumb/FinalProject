import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, Image, TouchableOpacity, Button, View, Fetch, UseEffect } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const Strategy = ({ navigation, route }) => {
	const {deal, play1, play2, newCards} = route.params;
	const {redeal} = route.params;
	const dealer = deal;
	const p1 = play1;
	const p2 = play2;
	const news = newCards;
	const newCard = redeal;
	const currentTotal = p1 + p2;
	
	
	const [handType, setHandType] = useState('hard'); 
	const [move, setMove] = useState('hit');
	const [total, setTotal] = useState(0);
	const [dealVal, setDealer] = useState(0);


	// useEffect(() => {
		


	// }, [newCards]);

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

		
		useEffect(() => {
			let dtotal = 0;
			if(dealer[0] === 'A'){
				dtotal = (dtotal + 11);
			}else if(dealer[0] === '0' || dealer[0] === 'J' || dealer[0] === 'Q' || dealer[0] === 'K'){
				dtotal = (dtotal + 10);
			}else{
				const vall = parseInt(dealer);
				dtotal = (dtotal + vall);
			}
			setDealer(dtotal);
		}, [deal]);

		useEffect(() => {
			if(handType === 'hard') {
				if(total < 9) {
					setMove('Hit');
				}
				if(total === 9) {
					if( dealVal !== 3 && dealVal !== 4 && dealVal !== 5 && dealVal !== 6) {
						setMove('Hit');
					}
					else {
						setMove('Double');
					}
			 }
				if(total === 10) {
					if(dealVal === 10 || dealVal === 11) {
						setMove('Hit');
					}
					else{
						setMove('Double');
					}
				}
				if(total === 11) {
					setMove('Double');
				}
				if(total === 12) {
					if(dealVal === 4 || dealVal === 5 || dealVal === 6) {
						setMove('Stay');
					}
					else{
						setMove('Hit');
					}
				}
				if(total === 13 || total === 14 || total === 15 || total === 16) {
					if(dealVal === 2|| dealVal === 3 || dealVal === 4 || dealVal === 5 || dealVal === 6) {
						setMove('Stay');
					}
					else{
						setMove('Hit');
					}
				}
				if(total >= 17 && total !== 22) {
					setMove('Stay');
				}
				if(total === 22) {
					if(dealVal === 4 || dealVal === 5 || dealVal === 6) {
						setMove('Stay');
					}
					else{
						setMove('Hit');
					}
				}
			 }
			 else {
				if(total === 13 || total === 14) {
					if(dealVal !== 5 && dealVal !== 6) {
						setMove('Hit');
					}
					else{
						setMove('Double');
					}
				}
				if(total === 15 || total === 16) {
					if(dealVal !== 4 && dealVal !== 5 && dealVal !== 6) {
						setMove('Hit');
					}
					else{
						setMove('Double');
					}
				}
				if(total === 17) {
					if(dealVal !== 3 && dealVal !== 4 && dealVal !== 5 && dealVal !== 6) {
						setMove('Hit');
					}
					else{
						setMove('Double');
					}
				}
				if(total === 18) {
					if(dealVal <= 8) {
						setMove('Stay');
					}
					else {
						setMove('Hit');
					}
				}
				else{
					setMove('Stay');
				}
			 
			 
			 }
			 
		}, [total]);
		

		const handleClick = () => {
			navigation.navigate('SecondDeal', { deal, play1, play2, newCards});
		};

	  return (
		<View>
			<Text>Dealer showing: {dealVal}</Text>
			<View>
			<Image source={{ uri: `https://deckofcardsapi.com/static/img/${deal}.png` }} style={styles.card}/>
			</View>
			<Text>Player total: {total}</Text>
			<Text>Move: {move}</Text>
			<Button title="View Basic Strategy" onPress={handleClick} />
			<Text>redeal: {redeal}</Text>
		</View>
		
		
	  );
	}


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



