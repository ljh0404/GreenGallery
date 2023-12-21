import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsByGenusComponent } from './plants-by-genus.component';

describe('PlantsByGenusComponent', () => {
  let component: PlantsByGenusComponent;
  let fixture: ComponentFixture<PlantsByGenusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantsByGenusComponent]
    });
    fixture = TestBed.createComponent(PlantsByGenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
