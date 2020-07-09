import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMapeoComponent } from './nuevo-mapeo.component';

describe('NuevoMapeoComponent', () => {
  let component: NuevoMapeoComponent;
  let fixture: ComponentFixture<NuevoMapeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoMapeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoMapeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
