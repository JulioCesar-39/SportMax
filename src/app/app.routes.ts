import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Clientes } from './pages/admin/clientes/clientes';

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
    }
];
