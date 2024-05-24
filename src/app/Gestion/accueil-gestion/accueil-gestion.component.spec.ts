import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilGestionComponent } from './accueil-gestion.component';

describe('AccueilGestionComponent', () => {
  let component: AccueilGestionComponent;
  let fixture: ComponentFixture<AccueilGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccueilGestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
