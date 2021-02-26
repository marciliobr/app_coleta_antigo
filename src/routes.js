import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Sobre from './pages/sobre';
import Login from './pages/login'
import Materiais from './pages/materiais'
import CadastrarUsuario from './pages/cadastrarUsuario'
import CadastrarPonto from './pages/cadastrarPonto'
import ListarPonto from './pages/listarPontoColeta'
import ListarSolicitacoes from './pages/listarSolicitacoes'

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Cadastrar Usuário" component={CadastrarUsuario} />
                <Drawer.Screen name="Lista de Pontos" component={ListarPonto} />
                <Drawer.Screen name="Cadastrar Ponto" component={CadastrarPonto} />
                <Drawer.Screen name="Lista de Solicitações" component={ListarSolicitacoes} />
                <Drawer.Screen name="Materiais" component={Materiais} />
                <Drawer.Screen name="Sobre" component={Sobre} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


