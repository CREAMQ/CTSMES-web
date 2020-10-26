import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipinfoImportComponent } from './shipinfo-import.component';

describe('ShipinfoImportComponent', () => {
  let component: ShipinfoImportComponent;
  let fixture: ComponentFixture<ShipinfoImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipinfoImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipinfoImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
