import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPersonaComponent } from './borrar-persona.component';

describe('BorrarPersonaComponent', () => {
  let component: BorrarPersonaComponent;
  let fixture: ComponentFixture<BorrarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
