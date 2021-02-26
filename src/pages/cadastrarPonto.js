import React, { useState } from 'react';
import { ScrollView, View, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';



import api from '../server/api';


export default function pedidoColeta({ navigation }) {

    const [nomePontoColeta, setNomePontoColeta] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [pontoReferencia, setPontoReferencia] = useState('');
    const [numeroCasa, setNumeroCasa] = useState('');
    const [responsavel, setResponsavel] = useState('');

    const [temPrivado, setTemPrivado] = useState(false);



    async function handleSubmit() {


    }

    return (
        <KeyboardAvoidingView enabled={Platform.OS == 'android'} behavior="height" style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.titulo}>CADASTRO DO PONTO DE COLETA</Text>

                <ScrollView>

                    <Text style={styles.label}>NOME DO PONTO DE COLETA: </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Informe o nome desejado"
                        autoCapitalize="words"
                        placeholderTextColor="#FFF"
                        autoCorrect={false}
                        value={nomePontoColeta}
                        onChangeText={setNomePontoColeta}
                    />



                    <Text style={styles.label}>BAIRRO: </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome do bairro"
                        autoCapitalize="words"
                        placeholderTextColor="#FFF"
                        autoCorrect={false}
                        value={bairro}
                        onChangeText={setBairro}
                    />

                    <Text style={styles.label}>RUA: </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome da rua"
                        autoCapitalize="words"
                        placeholderTextColor="#FFF"
                        autoCorrect={false}
                        value={rua}
                        onChangeText={setRua}
                    />
                    <Text style={styles.label}>PONTO DE REFERÊNCIA: </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome do ponto"
                        autoCapitalize="words"
                        placeholderTextColor="#FFF"
                        autoCorrect={false}
                        value={pontoReferencia}
                        onChangeText={setPontoReferencia}
                    />
                    <Text style={styles.label}>NÚMERO DA CASA/APARTAMENTO: </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="O número da casa"
                        autoCapitalize="words"
                        placeholderTextColor="#FFF"
                        autoCorrect={false}
                        value={numeroCasa}
                        onChangeText={setNumeroCasa}
                    />
                    <Text style={styles.label}>RESPONSÁVEL: </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="O nome do responsável"
                        autoCapitalize="words"
                        placeholderTextColor="#FFF"
                        autoCorrect={false}
                        value={responsavel}
                        onChangeText={setResponsavel}
                    />


                    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    titulo: {
        color: '#741B75',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        marginTop: 50

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 2,
        marginTop: 9
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        margin: 30,
        marginTop: 60,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 5,
        borderRadius: 4,
        backgroundColor: "#D8BFD8"

    },

    button: {
        height: 42,
        backgroundColor: '#741B75',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 10
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
