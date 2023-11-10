import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelendoComponent } from './relendo.component';

describe('RelendoComponent', () => {
  let component: RelendoComponent;
  let fixture: ComponentFixture<RelendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelendoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
