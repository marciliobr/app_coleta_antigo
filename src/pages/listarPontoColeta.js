import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform, Text, StyleSheet, } from 'react-native';

import api from '../server/api';
import PontoColeta from '../components/pontoColeta';


export default function listarPontoColeta({ navigation }) {

    const pontos = [

        {
            _id: '1',
            nomePontoColeta: 'PontoBC',
            rua: 'a',
            bairro: 'b',
            numeroCasa: 2,
            responsavel: 'brendda',
            pontoReferencia: 'posto',
            status: 'inativo',

        },
        {
            _id: '2',
            nomePontoColeta: 'PontoDD',
            rua: 'd',
            bairro: 'a',
            numeroCasa: 5,
            responsavel: 'shi',
            pontoReferencia: 'escola',
            status: 'ativo',

        },

    ]


    async function handleSubmit() {

    }
    //  {solicitacoes.map(solicitacao => <Solicitacao  solicitacao={solicitacao}/>)}
    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>

            <View style={styles.container}>
                <Text style={styles.titulo}>PONTOS DE COLETA CADASTRADOS</Text>

                <ScrollView>
                    {pontos.map(ponto => <PontoColeta style={styles.ponto} key={ponto._id} ponto={ponto} />)}

                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 30

    },
    titulo: {
        color: '#741B75',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'

    },
    ponto: {
        marginTop: 20,

    },
});

