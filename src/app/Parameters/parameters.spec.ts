import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Parameters } from './parameters';

describe('Parameters', () => {
  let component: Parameters;
  let fixture: ComponentFixture<Parameters>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Parameters],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Parameters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
