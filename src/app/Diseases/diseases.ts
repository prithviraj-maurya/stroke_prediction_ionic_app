import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonSelect, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { DiseasesService } from '../diseases.service';
import { diseases } from '../model/Diseases';

@Component({
  selector: 'app-diseases',
  templateUrl: 'diseases.html',
  styleUrls: ['diseases.scss']
})
export class Diseases implements OnInit {

  @ViewChild('diseaseSelect', { static: false }) diseaseSelect: IonSelect;
  selectedDisease;
  diseaseForm: FormGroup;
  params = [];
  diseasesList = diseases;
  predictions;
  paramsStored = false;
  loading;
  constructor(private diseaseService: DiseasesService, private router: Router,
    public loadingController: LoadingController, public toastController: ToastController) {}

  ngOnInit() {}

  ionViewDidLeave() {
    this.diseaseForm.reset();
    this.params.map(param => delete param['default']);
    this.diseaseSelect.value = '';
  }

  async createForm(params) {
    let group = {};
    params.forEach(disease => {
      group[disease.field] = new FormControl(disease.default || '', Validators.required);
    });
    this.diseaseForm = new FormGroup(group);
    this.loading = await this.loadingController.create();
  }

  onDiseaseSelected(value: string) {
    this.selectedDisease = this.diseasesList.find(disease => disease.label === value.trim());
    this.params = this.selectedDisease ? this.selectedDisease.parameters : [];
    this.getDiseaseStoredValues();
    this.createForm(this.params);
    console.log(this.params);
  }

  getDiseaseStoredValues() {
    this.params.map(param => {
      this.diseaseService.getDiseaseParams(param.field).then(result => {
        param['default'] = result;
        this.paramsStored = result || false;
      }).then(() => this.createForm(this.params));
    });
  }

  onSubmit() {
    this.loading.present();
    Object.keys(this.diseaseForm.controls).forEach(control => {
      const value = this.diseaseForm.get(control).value;
      if (value && typeof value === 'string') {
        this.diseaseForm.controls[control].setValue(value.trim());
      }
    });
    this.diseaseService.saveDiseaseParams(this.diseaseForm.value);
    this.diseaseService.getDiseasePredictions(this.diseaseForm.value, this.selectedDisease.label).subscribe(result => {
      console.log(result);
      this.diseaseService.savePredictions(result, this.selectedDisease, this.params);
      this.loadingController.dismiss();
      this.router.navigate(['/tabs/diseases/predict', {'selectedDisease': this.selectedDisease.label}]);
    }, error => {
      this.loadingController.dismiss();
    });
  }

  deleteParams() {
    this.diseaseForm.reset();
    this.params.map(param => delete param['default']);
    this.diseaseService.clearStorage();
    this.toastController.create({ message: 'Removed successfully!'});
  }
}
