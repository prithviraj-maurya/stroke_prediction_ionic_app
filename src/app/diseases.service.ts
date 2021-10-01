import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DiseasesService {
  configUrl = 'https://stroke-model-prediction-flask.herokuapp.com/predict';
  // configUrl = 'http://127.0.0.1:5000/predict';
  predictedDisease = {};

  constructor(private http: HttpClient, private storageService: StorageService) { }

  getDiseasePredictions(inputs, selectedDisease) {
    const data = JSON.parse(JSON.stringify(inputs));
    Object.keys(data).map(field => {
      if (field === 'hypertension' || field === 'heart_disease') {
        data[field] = data[field] === 'Yes' ? 1 : 0;
      }
    });
    const url = `${this.configUrl}/${selectedDisease.toLowerCase()}`;
    return this.http.post(url, data);
  }

  saveDiseaseParams(params) {
    Object.keys(params).map(key => {
      this.storageService.set(key, params[key]).then(result => {
        console.log('Data is saved', key);
      }).catch(e => {
        console.log("error: " + e);
      });
    })
  }

  savePredictions(predictions, selectedDisease, parameters) {
    this.predictedDisease[selectedDisease.label] = {
      prediction: predictions['prediction'],
      selectedDisease: selectedDisease,
      params: parameters,
      risks: predictions['risks'],
      recommendations: predictions['recommendations'],
      feature_importances: predictions['feature_importances']
    };
  }

  getDiseaseParams(key: string) {
    return this.storageService.get(key);
  }

  clearStorage() {
    this.storageService.clear();
  }
}
