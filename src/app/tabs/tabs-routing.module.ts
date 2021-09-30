import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictionsComponent } from '../predictions/predictions.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'parameters',
        loadChildren: () => import('../Parameters/parameters.module').then(m => m.ParametersModule)
      },
      {
        path: 'diseases',
        loadChildren: () => import('../Diseases/diseases.module').then(m => m.DiseasesModule)
      },
      {
        path: 'symptoms',
        loadChildren: () => import('../Symptoms/symptoms.module').then(m => m.SymptomsModule)
      },
      {
        path: 'predict',
        component: PredictionsComponent
      },
      {
        path: '',
        redirectTo: '/tabs/diseases',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/diseases',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
