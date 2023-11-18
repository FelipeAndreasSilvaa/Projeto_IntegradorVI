import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPublicacaoComponent } from './modal-publicacao.component';

describe('ModalPublicacaoComponent', () => {
  let component: ModalPublicacaoComponent;
  let fixture: ComponentFixture<ModalPublicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPublicacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPublicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
