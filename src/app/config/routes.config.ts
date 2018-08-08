import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { LoginComponent } from '../components/login/login.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: '**', component: NotFoundComponent}
  ];

export const routing = RouterModule.forRoot(appRoutes);