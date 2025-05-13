import { RegistroComponent } from './componentes/registro/registro.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidosComponent } from './componentes/bienvenidos/bienvenidos.component';
import { ErrorComponent } from './componentes/error/error.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';


export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'quien-soy',
        component: QuienSoyComponent
    },
    {
        path: 'home',
        loadComponent: () => import('./componentes/bienvenidos/bienvenidos.component').then(m => m.BienvenidosComponent),
        //component: BienvenidosComponent
    },
    {
        path: 'registro',
        loadComponent: () => import('./componentes/registro/registro.component').then(m => m.RegistroComponent),
    },
    {
        path: '',
        pathMatch: 'full',
        component: BienvenidosComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
