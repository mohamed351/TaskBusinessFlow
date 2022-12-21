import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonButtonComponent } from './ribbon-button.component';

describe('RibbonButtonComponent', () => {
  let component: RibbonButtonComponent;
  let fixture: ComponentFixture<RibbonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RibbonButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RibbonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
