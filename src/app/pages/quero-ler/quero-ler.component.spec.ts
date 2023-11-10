import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueroLerComponent } from './quero-ler.component';

describe('QueroLerComponent', () => {
  let component: QueroLerComponent;
  let fixture: ComponentFixture<QueroLerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueroLerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueroLerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
