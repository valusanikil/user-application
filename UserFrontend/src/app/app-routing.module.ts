import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsersearchComponent } from './usersearch/usersearch.component';

const routes: Routes = [
  {path:"",component:MainComponent},
  {path:"userregister",component:UserregisterComponent},
  {path:"userlist",component:UserlistComponent},
  {path:"usersearch",component:UsersearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
