import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';


const redirectUnauthorizedToSearch = () => redirectUnauthorizedTo(['search']);

const routes: Routes = [
  {path: 'user', component: UserComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToSearch}},
  {path: 'search', component: SearchComponent},
  {path: '**', redirectTo: '/search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
