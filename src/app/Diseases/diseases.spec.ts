import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Diseases } from './diseases';

describe('Tab2Page', () => {
  let component: Diseases;
  let fixture: ComponentFixture<Diseases>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Diseases],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Diseases);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
