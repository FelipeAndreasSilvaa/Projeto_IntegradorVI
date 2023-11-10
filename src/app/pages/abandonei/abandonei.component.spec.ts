import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbandoneiComponent } from './abandonei.component';

describe('AbandoneiComponent', () => {
  let component: AbandoneiComponent;
  let fixture: ComponentFixture<AbandoneiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbandoneiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbandoneiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
