import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVotacionComponent } from './detalle-votacion.component';

describe('DetalleVotacionComponent', () => {
  let component: DetalleVotacionComponent;
  let fixture: ComponentFixture<DetalleVotacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleVotacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleVotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
