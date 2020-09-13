import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import {ViewstudentComponent} from './viewstudent/viewstudent.component'
import {EditComponent} from './edit/edit.component'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: UserComponent }]
},
{
    path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
},{path:'view/:id',component:ViewstudentComponent,canActivate:[AuthGuard]}
,{path:'edit/:id',component:EditComponent,canActivate:[AuthGuard]},
{
    path: '', redirectTo: '/login', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
