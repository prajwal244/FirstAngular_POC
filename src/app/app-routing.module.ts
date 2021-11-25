import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdituserComponent } from './components/edituser/edituser.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ViewuserComponent } from './components/viewuser/viewuser.component';

const routes: Routes = [
{path:'users',component:UserlistComponent},
{path:'registeruser',component:RegisteruserComponent},
{path:'',redirectTo:'users',pathMatch:'full'},
{path:'edituser/:id', component: EdituserComponent},
{path:'viewuser/:id',component: ViewuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
