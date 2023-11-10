import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendoComponent } from './lendo.component';

describe('LendoComponent', () => {
  let component: LendoComponent;
  let fixture: ComponentFixture<LendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
