import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Symptoms } from './symptoms';

describe('Tab3Page', () => {
  let component: Symptoms;
  let fixture: ComponentFixture<Symptoms>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Symptoms],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Symptoms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
