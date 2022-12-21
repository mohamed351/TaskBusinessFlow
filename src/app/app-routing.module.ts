import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigramComponent } from './components/digram/digram.component';

const routes: Routes = [
{path:"",component:DigramComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
