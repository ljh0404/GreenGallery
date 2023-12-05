import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenusPageComponent } from './genus-page.component';

describe('GenusPageComponent', () => {
  let component: GenusPageComponent;
  let fixture: ComponentFixture<GenusPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenusPageComponent]
    });
    fixture = TestBed.createComponent(GenusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
