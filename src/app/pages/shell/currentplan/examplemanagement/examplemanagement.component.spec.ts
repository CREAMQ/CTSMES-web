import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplemanagementComponent } from './examplemanagement.component';

describe('ExamplemanagementComponent', () => {
  let component: ExamplemanagementComponent;
  let fixture: ComponentFixture<ExamplemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
