import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreplanComponent } from './preplan.component';

describe('PreplanComponent', () => {
  let component: PreplanComponent;
  let fixture: ComponentFixture<PreplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
