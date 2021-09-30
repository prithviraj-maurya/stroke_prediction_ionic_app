import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Diseases } from './diseases';

import { DiseasesRoutingModule } from './diseases-routing.module';
import { PredictionsComponent } from '../predictions/predictions.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DiseasesRoutingModule
  ],
  declarations: [Diseases, PredictionsComponent]
})
export class DiseasesModule {}
