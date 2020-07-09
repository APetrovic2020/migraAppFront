import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarGeneralComponent } from './toolbar-general.component';

describe('ToolbarGeneralComponent', () => {
  let component: ToolbarGeneralComponent;
  let fixture: ComponentFixture<ToolbarGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
