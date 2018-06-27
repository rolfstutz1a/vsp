import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedStationComponent } from './selected-station.component';

describe('SelectedStationComponent', () => {
  let component: SelectedStationComponent;
  let fixture: ComponentFixture<SelectedStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
