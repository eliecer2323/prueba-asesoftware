import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { QueryComponent } from './components/query/query.component';


const routes: Routes = [
  {
    path: 'form', 
    component: FormComponent
  },
  {
    path: 'query',
    component: QueryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
