import { CreateSlaveComponent } from './pages/create-slave/create-slave.component';
import { EditSlaveComponent } from './pages/edit-slave/edit-slave.component';
import { PasswordComponent } from './pages/password/password.component';
import { AuthGuard } from './services/auth-guard.service';
import { DomainsComponent } from './pages/domains/domains.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EditAuthComponent } from './pages/edit-auth/edit-auth.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'logout',
        component: LoginComponent,
        data: { logout: true }
    },
    {
        path: '',
        pathMatch: 'prefix',
        canActivate: [AuthGuard],
        children: [
            {
                path: 'domains',
                component: DomainsComponent
            },
            {
                path: 'domains/slave/:domainId',
                component: EditSlaveComponent
            },
            {
                path: 'domains/auth/:domainId',
                component: EditAuthComponent
            },
            {
                path: 'domains/create/slave',
                component: CreateSlaveComponent
            },
            {
                path: 'password',
                component: PasswordComponent
            },
            {
                path: '**',
                redirectTo: '/'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
