import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfeitoColaborativoComponent } from './efeito-colaborativo.component';

describe('EfeitoColaborativoComponent', () => {
  let component: EfeitoColaborativoComponent;
  let fixture: ComponentFixture<EfeitoColaborativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfeitoColaborativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EfeitoColaborativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
