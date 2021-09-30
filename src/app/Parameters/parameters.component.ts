import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parameters } from './parameters';

const routes: Routes = [
  {
    path: '',
    component: Parameters,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersPageRoutingModule {}
