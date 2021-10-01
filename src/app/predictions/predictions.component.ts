import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DiseasesService } from '../diseases.service';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss'],
})
export class PredictionsComponent implements OnInit {

  predictedResponse;
  importantFeature;
  constructor(private route: ActivatedRoute, private diseaseService: DiseasesService) { }

  ngOnInit() {
    this.route.params.subscribe(result => {
      const disease = result['selectedDisease'];
      this.predictedResponse = this.diseaseService.predictedDisease[disease];
      const features = this.predictedResponse.feature_importances
      this.importantFeature = this.predictedResponse.params[features && features.indexOf(Math.max(...features))].label || '';
    });
  }
}
