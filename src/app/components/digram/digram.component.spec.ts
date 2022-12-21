import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigramComponent } from './digram.component';

describe('DigramComponent', () => {
  let component: DigramComponent;
  let fixture: ComponentFixture<DigramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
