import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVotacionesComponent } from './ver-votaciones.component';

describe('VerVotacionesComponent', () => {
  let component: VerVotacionesComponent;
  let fixture: ComponentFixture<VerVotacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerVotacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerVotacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
