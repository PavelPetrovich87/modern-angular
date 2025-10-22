import { Routes } from '@angular/router';
import { LoginComponent } from './pages/LoginComponent'

export const routes: Routes = [
    {
        path: '/login', component: LoginComponent
    },
    {
        path: '/register', loadComponent: () => {
            return import('./pages/RegistrationComponent').then(m => m.RegistrationComponent)
        }
    },
    {
        path: './employess', loadChildren: () => {
            return import('./pages/employees/employees.routes').then(m => m.routes)
        }
    }
];
