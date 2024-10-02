import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametricLinkComponent } from './parametric-link.component';

describe('ParametricLinkComponent', () => {
  let component: ParametricLinkComponent;
  let fixture: ComponentFixture<ParametricLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametricLinkComponent]
    });
    fixture = TestBed.createComponent(ParametricLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
