import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Clientes } from './pages/admin/clientes/clientes';
import { Produtos } from './pages/produtos/produtos';
import { Admprodutos } from './pages/admprodutos/admprodutos';

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
        path: 'admin/clientes', 
        component: Clientes,
        title: 'Gerenciar Clientes'
    },
    {
        path: 'produtos',
        component: Produtos,
        title: 'Produtos'
    },
    {
        path: 'admprodutos',
        component: Admprodutos,
        title: 'Manutenção de Produtos'
    }
];
