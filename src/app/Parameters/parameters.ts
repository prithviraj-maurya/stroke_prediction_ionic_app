import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { DiseasesService } from '../diseases.service';
import { commonParams } from '../model/Diseases';

@Component({
  selector: 'app-parameters',
  templateUrl: 'parameters.html',
  styleUrls: ['parameters.scss']
})
export class Parameters {

  parametersForm: FormGroup;
  params = [];
  paramsStored = false;
  constructor(private diseaseService: DiseasesService, public toastController: ToastController) {
    this.params = commonParams || [];
    this.getStoredParams();
    this.createForm(this.params);
    console.log(this.params);
  }

  createForm(params) {
    let group = {};
    params.forEach(param => {
      group[param.field] = new FormControl(param.default || '', Validators.required);
    });
    this.parametersForm = new FormGroup(group);
  }

  getStoredParams() {
    this.params.map(param => {
      this.diseaseService.getDiseaseParams(param.field).then(result => {
        param['default'] = result;
        this.paramsStored = result || false;
      }).then(() => this.createForm(this.params));
    });
  }

  async onSubmit() {
    Object.keys(this.parametersForm.controls).forEach(control => {
      const value = this.parametersForm.get(control).value;
      if (value && typeof value === 'string') {
        this.parametersForm.controls[control].setValue(value.trim());
      }
    });
    this.diseaseService.saveDiseaseParams(this.parametersForm.value);
    const toast = await this.toastController.create({
      duration: 2000,
      message: 'Parameters updated successfully',
      position: 'top',
      color: 'success'
    });
    await toast.present();
  }

  async deleteParams() {
    this.parametersForm.reset();
    this.params.map(param => delete param['default']);
    this.diseaseService.clearStorage();
    const toast = await this.toastController.create({
      duration: 2000,
      message: 'Parameters removed successfully',
      position: 'top',
      color: 'success'
    });
    await toast.present();
  }
}
