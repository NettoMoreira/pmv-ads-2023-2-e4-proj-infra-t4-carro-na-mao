import React, {useState,useEffect} from "react";
import { TextInput,View,Text,StyleSheet, } from "react-native";
import { RecuperaToken } from "../Autenticação/autenticacao";
const login = ()=> {
    const [email,setEmail] = useState()
    const [senha,setSenha] = useState()
    const [token,setToken]=useState(null)
    useEffect(() => {
        async function fetchData() {
            try {
                const jwtToken = await RecuperaToken();
                setToken(jwtToken);
            } catch (error) {
                console.error('Erro ao recuperar token:', error);
            }
        }
        fetchData()
      },[]);
      console.log(token)


return (

        <View>
        <Text>ola mundo</Text>
        <TextInput
            placeholder="Digite seu email"
            onChange={email=>setEmail(email)}
            value={email}
        />
        <TextInput
            placeholder="Digite sua senha"
            onChange={senha => setSenha(senha)}
            value={senha}
        //secureTextEntry={IsPassword}
        />
    </View>
)

}



export default login