import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DiseasesService } from '../diseases.service';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss'],
})
export class PredictionsComponent implements OnInit {

  prediction;
  parameters;
  disease;
  risks;
  recommendations;
  constructor(private route: ActivatedRoute, private diseaseService: DiseasesService) { }

  ngOnInit() {
    this.route.params.subscribe(result => {
      const disease = result['selectedDisease'];
      const predictions = this.diseaseService.predictedDisease[disease];
      this.prediction = predictions['prediction'];
      this.risks = predictions['risks'];
      this.recommendations = predictions['recommendations'];
      this.parameters = predictions['params'];
      this.disease = predictions['selectedDisease'].label;
    });
  }
}
