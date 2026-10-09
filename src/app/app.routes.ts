import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Produtos } from './pages/produtos/produtos';
import { Manutencao } from './pages/manutencao/manutencao';


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
    },
    {
        path: 'manutencao',
        component: Manutencao,
        title: 'Manutenção'
    }
];