import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximityComponent } from './proximity.component';

describe('ProximityComponent', () => {
  let component: ProximityComponent;
  let fixture: ComponentFixture<ProximityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProximityComponent]
    });
    fixture = TestBed.createComponent(ProximityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
