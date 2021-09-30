import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictionsComponent } from '../predictions/predictions.component';
import { Diseases } from './diseases';

const routes: Routes = [
  {
    path: '',
    component: Diseases
  },
  {
    path: 'predict',
    component: PredictionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiseasesRoutingModule { }
