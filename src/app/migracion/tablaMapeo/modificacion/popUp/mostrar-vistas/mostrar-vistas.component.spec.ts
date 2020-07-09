import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarVistasComponent } from './mostrar-vistas.component';

describe('MostrarVistasComponent', () => {
  let component: MostrarVistasComponent;
  let fixture: ComponentFixture<MostrarVistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarVistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarVistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
