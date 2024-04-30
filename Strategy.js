import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, Button, View } from 'react-native';

const [type, setType] = useState('soft');
const [pTotal, setPTotal] = useState();
const [dTotal, setDTotal] = useState();

function hard(){
    setType('hard');
}

const url = 'https://blackjack-basic-strategy.p.rapidapi.com/'+{type}+'/'+{pTotal}+'/'+{dTotal};
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e339b9a640msh268ce8ad2d9ce0ep1d67cbjsnd774f55fecc0',
		'X-RapidAPI-Host': 'blackjack-basic-strategy.p.rapidapi.com'
	}
};

export default async function checkStrat(){
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
};