import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCampoComponent } from './editar-campo.component';

describe('EditarCampoComponent', () => {
  let component: EditarCampoComponent;
  let fixture: ComponentFixture<EditarCampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
