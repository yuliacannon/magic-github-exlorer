import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: SearchComponent},
  {path: 'users:id', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
