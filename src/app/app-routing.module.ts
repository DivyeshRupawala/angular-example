import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnAngularComponent } from './learn-angular/learn-angular.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'learn-angular', component: LearnAngularComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
