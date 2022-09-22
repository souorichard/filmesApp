import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JurassicWorldODominioPage } from './jurassic-world-o-dominio.page';

describe('JurassicWorldODominioPage', () => {
  let component: JurassicWorldODominioPage;
  let fixture: ComponentFixture<JurassicWorldODominioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JurassicWorldODominioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JurassicWorldODominioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
