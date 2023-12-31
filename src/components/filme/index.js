import { StyleSheet } from "react-native";
import { Button, Image, Text, TouchableOpacity, View } from "react-native-web";
import { useEffect } from 'react';


export default function CartaoFilme({filme}){

const ImgURL= ("https://api.otaviolube.com");
/*
const MAX_WIDTH = Dimensions.get;
const MAX_HEIGHT = Dimensions.get;
*/
return (
    <View style={styles.viewCartao}>
        <Image style={styles.img} source={{uri: ImgURL + filme.poster.data.attributes.url}}></Image>
        <Text style={styles.titulo}> {filme.titulo} </Text>
        <Text style={styles.subTitulo}> {filme.subtitulo} </Text>
        <Text style={styles.sinopse}>{filme.sinopse}</Text>
        <TouchableOpacity style={styles.btm}>
            <Text> Comprar </Text>
        </TouchableOpacity>
    </View>
)
}
const styles = StyleSheet.create ({
    viewCartao: {
        width: '80%',
        height: 'fit-content',
        alignItems: 'center',
        flexShrink: '0',
        padding: 10,
        margin: 20,
        justifyContent: 'flex-start',
        backgroundColor: '#ffffffa3'/*'#682121'*/
    },
    viewImg: {
        alignItems: 'center',
        width: 100,
        height: 150,
        backgroundColor: 'yellow'
    },
    img: {
        width: 100,
        height: 150,
        borderRadius: 10
    },
    viewData: {
        backgroundColor: 'green',
        padding: 10,
        width: '70%',
        height: '100%'
    },
    titulo: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        margin: 5,
        backgroundColor: 'silver'
    },subTitulo: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 5,
        backgroundColor: 'silver'
    },
    sinopse: {
        fontSize: 14,
        color: 'black',
        marginBottom: 15
    },
    btm: {
        padding: 10,
        backgroundColor: 'gold'
    }
    });
    