import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';


import { TouchableOpacity } from 'react-native-gesture-handler';

function ListarCatador({ solicitacao }) {


    useEffect(() => {

    }, []);


        return(
            <View style={styles.listItem}>
                <Text style={styles.dados}> NOME: {solicitacao.nomeCatador}</Text>
                <Text style={styles.dados}> LOGIN: {solicitacao.login}</Text>
                <Text style={styles.dados}> APELIDO: {solicitacao.apelido}</Text>
                <Text style={styles.dados}> Data de Admissão: {solicitacao.dataAdms}</Text>
                <Text style={styles.dados}> STATUS: {solicitacao.status}</Text>

                { solicitacao.status == '1' && 
                   solicitacao.status == 'desbloqueado'
                }

                { solicitacao.status == '0' && 
                    solicitacao.status == 'bloqueado'
                }

                
               
                {  solicitacao.status == '1' &&
                    <TouchableOpacity  style={styles.button1}>
                        <Text style={styles.buttonText}>Bloquear</Text>          
                    </TouchableOpacity>          
                }

                { solicitacao.status == '0' &&
                    <TouchableOpacity  style={styles.button1}>
                        <Text style={styles.buttonText}>Desbloquear</Text>          
                    </TouchableOpacity>          
                }
                
                     


             
            </View>
        )


}

const styles= StyleSheet.create({
    dados: {
        color: '#444',
        marginBottom: 10,
        fontSize: 14
    },
    listItem: {
        padding: 20,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: "#741B75",
        marginBottom: 10,
    },    
    button: {
        height: 42,
        backgroundColor: '#741B75',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginBottom: 3,
       
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    button1: {
        height: 42,
        backgroundColor: '#800000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginBottom: 3,
       
    },

});
export default (ListarCatador);
