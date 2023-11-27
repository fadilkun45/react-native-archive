import React from 'react'
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import { customFormatNumber } from '../lib/Helpers';

const Detail = ({route,navigation}) => {

    const { itemId, params } = route.params;
    
  return (
    <SafeAreaView style={{ width: "100%", display: "flex", marginTop: 10, alignItems: "center" }}>
    <Text variant='headlineLarge' style={{textAlign: "center"}}>{params?.name?.common}</Text>
    <Image source={{uri: params?.flags?.png}}  style={{width: 300, height: 150, marginTop: 20}} />
    <Text variant='bodyLarge' style={{marginTop: 20}}>Populasi: {customFormatNumber(params?.population)}</Text>
    <Text variant='bodyLarge' style={{marginTop: 20}}>Ibukota: {params?.name?.common === "Palestine" ? params?.capital[1] :  params?.capital[0]}</Text>
    <Text variant='bodyLarge' style={{marginTop: 20}}>benua: {params?.continents[0]}</Text>
    </SafeAreaView>
  )
}

export default Detail