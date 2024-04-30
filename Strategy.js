import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, Button, View, Fetch, UseEffect } from 'react-native';

//const [type, setType] = useState('soft');
//const [pTotal, setPTotal] = useState();
//const [dTotal, setDTotal] = useState();

const Strategy = ({ navigation }) => {		 
	  return (
		<View>
			<Text>PLEASE</Text>
		</View>
	  );
	}

	const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://blackjack-basic-strategy.p.rapidapi.com/hard/17/11');
xhr.setRequestHeader('X-RapidAPI-Key', 'e339b9a640msh268ce8ad2d9ce0ep1d67cbjsnd774f55fecc0');
xhr.setRequestHeader('X-RapidAPI-Host', 'blackjack-basic-strategy.p.rapidapi.com');

xhr.send(data);

	const styles = StyleSheet.create({
		container: {
		 paddingTop: 50
		},
		item: {
		  padding: 10,
		  fontSize: 18,
		  height: 54,
		},
		border: {
		  borderWidth: 1,
		  borderColor: "gray",
		}
	  });  
	
	export default Strategy;



