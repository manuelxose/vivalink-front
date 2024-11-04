import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPropuestasComponent } from './ver-propuestas.component';

describe('VerPropuestasComponent', () => {
  let component: VerPropuestasComponent;
  let fixture: ComponentFixture<VerPropuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerPropuestasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerPropuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
