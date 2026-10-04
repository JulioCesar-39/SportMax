import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Produtos } from './pages/produtos/produtos';
import { Carrinho } from './pages/carrinho/carrinho';
import { Cadastro } from './pages/cadastro/cadastro';

export const routes: Routes = [

     {
        path: '',
        component: Home,
        title: 'Home'
    },{
        path: 'login',
        component: Login,
        title: 'Login'
    },
    {
        path: 'produtos',
        component: Produtos,
        title: 'Produtos'
    },{
        path: 'carrinho',
        component: Carrinho,
        title: 'carrinho'
    },{
        path: 'cadastro',
        component: Cadastro,
        title: 'Criar Conta'
    }
];