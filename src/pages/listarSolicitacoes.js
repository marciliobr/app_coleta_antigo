import React, {useState,useEffect} from 'react';
import { View, ScrollView,Picker, AsyncStorage, KeyboardAvoidingView,Platform, Image, Text,TextInput,TouchableOpacity, StyleSheet,} from 'react-native';
import SolicitacaoColeta from '../components/solicitacaoColeta';


export default function listaSolicitacao({navigation}){

    const solicitacoes = [

     {
        _id:'1',
        data:'21/12/20',
        hora:'10:40',
        pontoColeta:'pontoC',
        status:'solicitado'
    }, 
     {
        _id:'2',
        data:'22/12/20',
        hora:'11:40',
        pontoColeta:'pontoD',
        status:'solicitado'
    },
    {
        _id:'3',
        data:'23/12/20',
        hora:'12:40',
        pontoColeta:'pontoE',
        status:'cancelado'
    },
    {
        _id:'4',
        data:'23/12/20',
        hora:'12:40',
        pontoColeta:'pontoE',
        status:'cancelado'
    }    
    ]

       
    async function handleSubmit(){
              
    }
    //  {solicitacoes.map(solicitacao => <Solicitacao  solicitacao={solicitacao}/>)}
    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>
        
        <View style={styles.container}>
           <Text style={styles.titulo}>MINHAS SOLICITAÇÕES</Text>
           
           <ScrollView>
           {solicitacoes.map(solicitacao => <SolicitacaoColeta style={styles.solicitacao} key={solicitacao._id} solicitacao={solicitacao}/>)}
              
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

