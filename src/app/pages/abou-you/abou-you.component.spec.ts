import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouYouComponent } from './abou-you.component';

describe('AbouYouComponent', () => {
  let component: AbouYouComponent;
  let fixture: ComponentFixture<AbouYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbouYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbouYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
