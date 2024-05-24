import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseAccueilComponent } from './classe-accueil.component';

describe('ClasseAccueilComponent', () => {
  let component: ClasseAccueilComponent;
  let fixture: ComponentFixture<ClasseAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasseAccueilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
