import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Parameters } from './parameters';
import { ParametersPageRoutingModule } from './parameters.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ParametersPageRoutingModule
  ],
  declarations: [Parameters]
})
export class ParametersModule {}
