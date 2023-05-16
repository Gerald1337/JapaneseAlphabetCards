import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardScreenComponent } from './flash-card-screen.component';

describe('FlashCardScreenComponent', () => {
  let component: FlashCardScreenComponent;
  let fixture: ComponentFixture<FlashCardScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashCardScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashCardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
