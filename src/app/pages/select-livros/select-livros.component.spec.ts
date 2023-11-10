import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLivrosComponent } from './select-livros.component';

describe('SelectLivrosComponent', () => {
  let component: SelectLivrosComponent;
  let fixture: ComponentFixture<SelectLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLivrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
