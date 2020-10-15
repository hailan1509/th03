import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bai2Component } from './bai2/bai2.component';

const routes: Routes = [

  {
    path: 'search',
    component: Bai2Component

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
