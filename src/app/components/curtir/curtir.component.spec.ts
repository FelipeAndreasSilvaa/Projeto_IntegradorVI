import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtirComponent } from './curtir.component';

describe('CurtirComponent', () => {
  let component: CurtirComponent;
  let fixture: ComponentFixture<CurtirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurtirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurtirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
