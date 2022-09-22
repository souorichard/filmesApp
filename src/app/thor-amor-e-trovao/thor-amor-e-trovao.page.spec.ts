import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThorAmorETrovaoPage } from './thor-amor-e-trovao.page';

describe('ThorAmorETrovaoPage', () => {
  let component: ThorAmorETrovaoPage;
  let fixture: ComponentFixture<ThorAmorETrovaoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThorAmorETrovaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThorAmorETrovaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
