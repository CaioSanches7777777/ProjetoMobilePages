import { View, Text } from "react-native-web";
import styles from "./styles";
import { Link } from "@react-navigation/native";

export default function MoviesPage(){



    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Pagina de Filmes</Text>
            <Link to={{screen: "LoginPage"}}>Ir para o login</Link>
        </View>
)
}

/*
import { View, Text } from "react-native-web";
import styles from "./styles";
import { Link } from "@react-navigation/native";
import { useState } from 'react';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native-web';
import { StatusBar } from 'expo-status-bar';
import CartaoFilme from "../../components/filme";

export default function MoviesPage(){
    let[filmes, setFilmes] = useState([]);

    useEffect(function() {
      fetch("https://api.otaviolube.com/api/filmes?populate=*")
      .then(resultado => resultado.json())
      .then(objeto => {
        console.log(objeto);
        setFilmes(objeto.data);
      })
      .then(error => console.log(error));
      
    },[]) 


    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Pagina de Filmes</Text>
            <Link to={{screen: "LoginPage"}}>Ir para o login</Link>
            {filmes.length > 0 ? 
      filmes.map(filme => <CartaoFilme key={filme.id} filme={filme.attributes}></CartaoFilme>)
       : <View><ActivityIndicator size={'large'} /><Text>Carregando...</Text></View>}
      
      <StatusBar style="auto" />
    
        </View>
)
}


*/