import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Symptoms } from './symptoms';

import { SymptomsRoutingModule } from './symptoms-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Symptoms }]),
    SymptomsRoutingModule,
  ],
  declarations: [Symptoms]
})
export class SymptomsModule {}
