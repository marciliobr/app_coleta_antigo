import React, {useState,useEffect} from 'react';
import { View, ScrollView,Picker, AsyncStorage, KeyboardAvoidingView,Platform, Image, Text,TextInput,TouchableOpacity, StyleSheet,} from 'react-native';
import ListarCatador from '../components/listarCatador';


export default function listaCatador({navigation}){

    const solicitacoes = [

     {
        _id:'1',
        nomeCatador:'Brendda',
        login:'brendda123',
        apelido:'bre',
        dataAdms:'23/01/2020',
        status:'1',
    }, 
       
    ]

       
    async function handleSubmit(){
              
    }
    //  {solicitacoes.map(solicitacao => <Solicitacao  solicitacao={solicitacao}/>)}
    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>
        
        <View style={styles.container}>
           <Text style={styles.titulo}>CATADORES CADASTRADOS</Text>
           
           <ScrollView>
           {solicitacoes.map(solicitacao => <ListarCatador style={styles.solicitacao} key={solicitacao._id} solicitacao={solicitacao}/>)}
              
           </ScrollView>
        </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        paddingTop: 30
        
    },
    titulo:{
        color: '#741B75',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,     
        textAlign: 'center'  
        
    },
    solicitacao:{
        marginTop:20,

    },
});

