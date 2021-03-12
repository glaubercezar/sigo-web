import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormasUpsertComponent } from './normas-upsert.component';

describe('NormasUpsertComponent', () => {
  let component: NormasUpsertComponent;
  let fixture: ComponentFixture<NormasUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormasUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormasUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
