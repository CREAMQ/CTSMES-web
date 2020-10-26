import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldboxdataComponent } from './fieldboxdata.component';

describe('FieldboxdataComponent', () => {
  let component: FieldboxdataComponent;
  let fixture: ComponentFixture<FieldboxdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldboxdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldboxdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
