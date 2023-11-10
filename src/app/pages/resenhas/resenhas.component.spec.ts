import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenhasComponent } from './resenhas.component';

describe('ResenhasComponent', () => {
  let component: ResenhasComponent;
  let fixture: ComponentFixture<ResenhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResenhasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResenhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
