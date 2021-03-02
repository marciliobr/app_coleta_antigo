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
import Catador from './pages/Catador'
import logoff from './pages/logoff'
import realizarSolicitação from './pages/realizarSolicitacao'
import catadorListar from './pages/catadorListar'
import demandaCatador from './pages/demandaCatador'
import relatorioDeCatador from './reports/relatorioDeCatador'
import relatorioDeMateriais from './reports/relatorioDeMateriais'
import demandaCooperativa from './pages/demandaDaCooperativa'




const Drawer = createDrawerNavigator();



export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Logoff" component={logoff} />
                <Drawer.Screen name="Cadastrar Usuário" component={CadastrarUsuario} />
                <Drawer.Screen name="Lista de catadores" component={catadorListar}/>
                <Drawer.Screen name="Lista de Pontos" component={ListarPonto} />
                <Drawer.Screen name="Cadastrar Ponto" component={CadastrarPonto} />
                <Drawer.Screen name="Cadastrar Catador" component={Catador} />
                <Drawer.Screen name="Lista de Solicitações" component={ListarSolicitacoes} />
                <Drawer.Screen name="Faça sua solicitação" component={realizarSolicitação} />
                <Drawer.Screen name="Materiais" component={Materiais} />
                <Drawer.Screen name="Sobre" component={Sobre} />
                <Drawer.Screen name="Demandas do Catador" component={demandaCatador} />
                <Drawer.Screen name="Relatório Demandas/Catador" component={relatorioDeCatador} />
                <Drawer.Screen name="Relatório Materiais" component={relatorioDeMateriais}/>
                <Drawer.Screen name="Demandas da Cooperativa" component={demandaCooperativa}/>
               
                
                
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


