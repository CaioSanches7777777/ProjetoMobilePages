import { View, Text, TextInput, Image, TouchableOpacity } from "react-native-web"
import styles from "./styles"
import { Link } from "@react-navigation/native"

export default function LoginPage(){



    return(
        <View style={styles.container}>
            <Image style={styles.ImgLogo} source={{uri:('https://seeklogo.com/images/U/universidade-vila-velha-logo-FD07FCF304-seeklogo.com.png')}}/>
            <Text style={styles.texto}>Pagina de Recuperar Senha</Text>
            <TextInput style={styles.InputEmail} placeholder="Email"></TextInput>
            <TextInput style={styles.InputSenha} placeholder="Senha"></TextInput>
            <TouchableOpacity style={styles.btm}>
                <Text style={styles.txtbtm}>Login</Text>
            </TouchableOpacity>
            <Link style={styles.NavPara} to={{screen: "RegisterPage"}}>Ir para o registro</Link>
            <Link style={styles.NavPara} to={{screen: "ForgotPasswordPage"}}>Recuperar senha</Link>
        </View>
)
}

